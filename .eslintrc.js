const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin')
  .configs.recommended

module.exports = {
  env: {
    node: true,
    jest: true,
    es6: true,
    browser: true
  },
  extends: ['react-app', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeature: {
      jsx: true
    }
  },
  plugins: ['react', 'jsx-a11y', 'import', 'spellcheck'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:import/typescript'],
      rules: Object.assign({}, typescriptEslintRecommended.rules, {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'none',
              requireLast: false
            },
            singleline: {
              delimiter: 'comma',
              requireLast: false
            }
          }
        ]
      })
    }
  ],
  rules: {
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'import/no-unresolved': 'off',
    'comma-dangle': ['error', 'never'],
    'no-plusplus': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-param-reassign': ['error', { props: false }],
    'new-cap': ['error', { capIsNew: false }],
    'no-lone-block': 'off',
    'no-lone-blocks': 'off',
    'no-mixed-operators': 'off',
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': ['error', { args: 'after-used' }],
    'max-len': 'off',
    'no-control-regex': 'off',
    'eol-last': ['error', 'always'],
    'no-console': ['error'],
    'spellcheck/spell-checker': [
      'error',
      {
        comments: false,
        strings: true,
        identifiers: true,
        lang: 'en_US',
        skipWordIfMatch: ['^[^A-Za-z_]'],
        skipWords: [
          'aes',
          'acc',
          'ack',
          'acls',
          'adm',
          'alloc',
          'ajv',
          'amazonaws',
          'amqp',
          'amqplib',
          'analytics',
          'anycast',
          'api',
          'apis',
          'applicationautoscaling',
          'appspot',
          'arg',
          'args',
          'argv',
          'arn',
          'askstories',
          'async',
          'auth',
          'autoload',
          'autoprefixer',
          'aws',
          'awslambda',
          'babelify',
          'babelrc',
          'backend',
          'basename',
          'behaviour',
          'bool',
          'bson',
          'btn',
          'buf',
          'cacheable',
          'calc',
          'cax',
          'cdn',
          'chai',
          'chainable',
          'charset',
          'checkbox',
          'cjs',
          'cli',
          'cloudfront',
          'cloudwatch',
          'columnify',
          'cmd',
          'codeload',
          'Codepage',
          'commiting',
          'commonjs',
          'config',
          'configs',
          'connack',
          'const',
          'Cooldown',
          'corejs',
          'cors',
          'cron',
          'cpus',
          'cqrs',
          'cte',
          'cuid',
          'cwd',
          'cryptr',
          'dateformat',
          'darwin',
          'dddddd',
          'ddd',
          'decrement',
          'decrypt',
          'decryptor',
          'deepmerge',
          'del',
          'desc',
          'deserialize',
          'deserialized',
          'deserializer',
          'deserializers',
          'dev',
          'devtool',
          'devtools',
          'dir',
          'dirname',
          'dns',
          'doctype',
          'docusaurus',
          'dom',
          'domready',
          'dotenv',
          'downvote',
          'dropdown',
          'dup',
          'dynamodb',
          'ecma',
          'elasticsearch',
          'encodings',
          'envs',
          'eqeqeq',
          'eql',
          'eol',
          'errno',
          'escaper',
          'escaperegexp',
          'encrypter',
          'decrypter',
          'eslint',
          'esm',
          'eventstore',
          'execpath',
          'expr',
          'extname',
          'facebook',
          'fanout',
          'fas',
          'favicon',
          'faq',
          'fff',
          'ffffff',
          'filename',
          'filenames',
          'fileupload',
          'firebase',
          'firebaseio',
          'fontawesome',
          'formatter',
          'fpr',
          'func',
          'getter',
          'githubusercontent',
          'github',
          'gte',
          'gif',
          'guid',
          'gzip',
          'Highload',
          'hmac',
          'hmr',
          'hostname',
          'href',
          'html',
          'http',
          'https',
          'ico',
          'iconv',
          'ident',
          'idx',
          'iife',
          'Img',
          'img',
          'impl',
          'indexreadpolicy',
          'indexwritepolicy',
          'init',
          'inline',
          'inlined',
          'inlines',
          'Inno',
          'instanceof',
          'interop',
          'invoker',
          'Ionicons',
          'ios',
          'Iot',
          'IotData',
          'iotdevicegateway',
          'iterable',
          'Jitter',
          'jpg',
          'jpeg',
          'js',
          'jsdom',
          'jsonb',
          'jsons',
          'jsonschema',
          'jsonwebtoken',
          'jsx',
          'jwt',
          'latin1',
          'lan',
          'len',
          'libs',
          'lifecycle',
          'linearized',
          'localhost',
          'lodash',
          'lockfile',
          'lstat',
          'lte',
          'md5',
          'Mergeable',
          'metadata',
          'middleware',
          'middlewares',
          'millis',
          'minimist',
          'mongo',
          'mongodb',
          'monorepo',
          'Monorepos',
          'mqtt',
          'multer',
          'multipart',
          'msg',
          'mysql',
          'mjs',
          'namespace',
          'namespaces',
          'nav',
          'navbar',
          'ndjson',
          'nedb',
          'newstories',
          'ngtools',
          'noop',
          'noopener',
          'noreferrer',
          'noredirect',
          'npm',
          'npmjs',
          'npx',
          'nspname',
          'nullable',
          'nullish',
          'num',
          'obj',
          'objoid',
          'objs',
          'octicon',
          'oid',
          'oper',
          'opn',
          'osascript',
          'palevioletred',
          'papayawhip',
          'param',
          'parameterized',
          'params',
          'pathname',
          'pid',
          'pingreq',
          'pingresp',
          'png',
          'polyfill',
          'polyfills',
          'postcss',
          'postgres',
          'postgresql',
          'prefetch',
          'principial',
          'Postfix',
          'pre',
          'preloader',
          'Presigned',
          'prev',
          'println',
          'proc',
          'processlist',
          'promisify',
          'proto',
          'pubsub',
          'purtuga',
          'qos',
          'querystring',
          'rabbitmq',
          'raf',
          'react',
          'reactstrap',
          'reactivity',
          'readdir',
          'readmodel',
          'readpolicy',
          'resetter',
          'realtime',
          'redux',
          'rdsdataservice',
          'rds',
          'referer',
          'refman',
          'regenerator',
          'reimagined',
          'relnamespace',
          'relname',
          'relkind',
          'remotedev',
          'renderer',
          'Renderless',
          'renderless',
          'repo',
          'req',
          'res',
          'resolvejs',
          'resolver',
          'resolvers',
          'respawn',
          'rgba',
          'rmdir',
          'rollbacking',
          'Roboto',
          'rpc',
          'runtime',
          'sanitizer',
          'savepoint',
          'scalable',
          'sdk',
          'sep',
          'serializable',
          'Serializers',
          'serializer',
          'serverless',
          'setsockopt',
          'sha512',
          'Sharings',
          'shm',
          'showstories',
          'sinon',
          'sitemap',
          'sni',
          'socktype',
          'splitter',
          'sql',
          'sqlite',
          'squaremobius',
          'src',
          'ssl',
          'ssr',
          'stackoverflow',
          'stderr',
          'stdin',
          'stdout',
          'str',
          'stringified',
          'strftime',
          'sts',
          'stepfunctions',
          'suback',
          'subdirectory',
          'submenu',
          'subsegment',
          'subsegments',
          'subquery',
          'Sv1',
          'svg',
          'symlink',
          'tagline',
          'tcp',
          'testcafe',
          'textarea',
          'tmpdir',
          'transactionid',
          'tgz',
          'timestamp',
          'tmp',
          'todo',
          'todolist',
          'todos',
          'topstories',
          'Transactional',
          'tsc',
          'trie',
          'truthy',
          'ttf',
          'ttl',
          'tsconfig',
          'tsr',
          'tsx',
          'txid',
          'txt',
          'typeof',
          'uglify',
          'undef',
          'unfetch',
          'unicode',
          'unlink',
          'unmarshall',
          'unmocked',
          'unmount',
          'unordered',
          'unserializable',
          'unshare',
          'unshift',
          'unsuback',
          'unsubscribe',
          'unsubscription',
          'unsubscriptions',
          'unvote',
          'unvoted',
          'upsert',
          'upvote',
          'upvoted',
          'uploader',
          'uri',
          'url',
          'urlencoded',
          'urls',
          'usename',
          'usr',
          'utf',
          'utf8mb4',
          'util',
          'utils',
          'uuid',
          'validator',
          'verdana',
          'viewmodel',
          'viewport',
          'vue',
          'wal',
          'webpack',
          'websockets',
          'whitelist',
          'wikipedia',
          'wildcard',
          'workspaces',
          'workspace',
          'writepolicy',
          'wss',
          'www',
          'xcopy',
          'xpub',
          'xray',
          'xsub',
          'xyz',
          'yargs',
          'ycombinator',
          'zeromq',
          'zmq',
          'zlib',
          'compat'
        ],
        minLength: 3
      }
    ]
  }
}
