import zmq from 'zeromq'
import initResolve from '../common/init-resolve'
import disposeResolve from '../common/dispose-resolve'

const isPromise = promise => Promise.resolve(promise) === promise

const processIncomingEvents = async (resolve, byteMessage) => {
  let readModelName = null
  let unlock = null
  const currentResolve = Object.create(resolve)
  try {
    const message = byteMessage.toString('utf8')
    const batchGuidIndex = message.indexOf(' ') + 1
    const payloadIndex = message.indexOf(' ', batchGuidIndex) + 1
    const batchGuid = message.substring(batchGuidIndex, payloadIndex - 1)

    const [listenerId, instanceId] = message
      .substring(0, batchGuidIndex - 1)
      .split('-')
      .map(str => new Buffer(str, 'base64').toString('utf8'))

    readModelName = listenerId

    if (!resolve.lockPromises.has(readModelName)) {
      resolve.lockPromises.set(readModelName, null)
    }

    while (isPromise(resolve.lockPromises.get(readModelName))) {
      await resolve.lockPromises.get(readModelName)
    }
    resolve.lockPromises.set(
      readModelName,
      new Promise(resolve => (unlock = resolve))
    )

    await initResolve(currentResolve)

    if (instanceId === resolve.instanceId) {
      const events = JSON.parse(message.slice(payloadIndex))
      await currentResolve.executeQuery.updateByEvents(readModelName, events)
    }

    resolve.pubSocket.send(`ACKNOWLEDGE-BATCH-TOPIC ${batchGuid}`)

    resolve.readModelsInitPromises.get(readModelName).resolvePromise()
  } catch (error) {
    resolveLog('error', 'Error while applying events to read-model', error)
  } finally {
    resolve.lockPromises.set(readModelName, null)
    unlock()
    await disposeResolve(currentResolve)
  }
}

const initBroker = async resolve => {
  const {
    assemblies: { eventBroker: eventBrokerConfig },
    readModels
  } = resolve
  resolve.readModelsInitPromises = new Map()
  for (const { name } of readModels) {
    let resolvePromise = null
    const promise = new Promise(resolve => (resolvePromise = resolve))
    promise.resolvePromise = resolvePromise
    resolve.readModelsInitPromises.set(name, promise)
  }

  const { zmqBrokerAddress, zmqConsumerAddress } = eventBrokerConfig

  const subSocket = zmq.socket('sub')
  await subSocket.connect(zmqBrokerAddress)

  const pubSocket = zmq.socket('pub')
  await pubSocket.connect(zmqConsumerAddress)

  subSocket.on('message', processIncomingEvents.bind(null, resolve))

  const doUpdateRequest = readModelName => {
    const topic = `${new Buffer(readModelName).toString('base64')}-${new Buffer(
      resolve.instanceId
    ).toString('base64')}`

    return resolve.subSocket.subscribe(topic)
  }

  const publishEvent = async event => {
    await resolve.pubSocket.send(`EVENT-TOPIC ${JSON.stringify(event)}`)

    await resolve.pubsubManager.dispatch({
      topicName: event.type,
      topicId: event.aggregateId,
      event
    })
  }

  Object.defineProperties(resolve, {
    lockPromises: { value: new Map(), writable: true },
    subSocket: { value: subSocket },
    pubSocket: { value: pubSocket },
    doUpdateRequest: { value: doUpdateRequest },
    publishEvent: { value: publishEvent }
  })
}

export default initBroker
