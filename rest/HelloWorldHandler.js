
const knex = require('./dbconfig')

var helloWorldHandler = {
  getHelloWorld: async (ctx, next) => {
    const result = await knex({ client: 'pg' })
      .select()
      .from('mytable')
      // .where({ name: 'firstname' })
      // .first()
    console.log(result)
    ctx.body = JSON.stringify(result)
    ctx.status = 200
    await next()
  }
}
module.exports = helloWorldHandler
