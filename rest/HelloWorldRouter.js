
const Router = require('koa-router')
const helloWorldHandler = require('./HelloWorldHandler')
const knex = require('./dbconfig')

var helloWorldRouter = new Router()

helloWorldRouter.get('/helloworld', async (ctx, next) => {
  await helloWorldHandler.getHelloWorld(ctx, next)
})

helloWorldRouter.get('/add', async (ctx, next) => {
  try {
    const ins = await knex('mytable').insert({name: 'bob'}).returning('*')
    console.log(ins)
    ctx.body = JSON.stringify(ins)
    ctx.status = 200
    await next()
  } catch (err) {
    console.error(err);
  }
})

module.exports = helloWorldRouter.routes()
