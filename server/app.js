const { createLogger } = require('./plugins/logger');
const Koa = require('koa');
const app = new Koa();

const logger = createLogger()
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

const createServer = () => {
  return app
}

const startServer = (port) => {
  app.listen(port)
  logger.info(`Server Start At ${port} 🌍`)
}

export {
  createServer,
  startServer,
}
