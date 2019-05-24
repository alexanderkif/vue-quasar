
const Router = require('koa-router')
const helloWorldHandler = require('./HelloWorldHandler')

var helloWorldRouter = new Router()

helloWorldRouter.get('/helloworld', async (ctx, next) => {
  await helloWorldHandler.getHelloWorld(ctx, next)
})

module.exports = helloWorldRouter.routes()
