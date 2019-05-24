
var helloWorldHandler = {
  getHelloWorld: async (ctx, next) => {
    ctx.body = { status: 'success', data: 'Hello World' }
    ctx.status = 200
    await next()
  }
}
module.exports = helloWorldHandler
