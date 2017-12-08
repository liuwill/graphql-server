const { createLogger } = require('./plugins/logger')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

const graphqlRouter = require('./router')

const logger = createLogger()

app.use(bodyParser())

app
  .use(graphqlRouter.default.routes())
  .use(graphqlRouter.default.allowedMethods())

// response
app.use(ctx => {
  ctx.body = 'Hello Koa'
})


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
