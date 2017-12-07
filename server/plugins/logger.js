const log4js = require('log4js')
const packageConfig = require('../../package.json')

log4js.configure({
  appenders: {
    'file': { type: 'file', filename: `log/${packageConfig.name}.log` },
    'console': { type: 'stdout' }
  },
  categories: {
    default: { appenders: ['file'], level: 'error' },
    console: { appenders: ['console'], level: 'info' }
  }
});

const innerLoggers = {
  'file': log4js.getLogger('file'),
  'console': log4js.getLogger('console')
}
const createLogger = (type) => {
  type = type || 'console'
  return  innerLoggers[type]
}

export { createLogger }
