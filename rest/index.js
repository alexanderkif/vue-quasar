
var serve = require('koa-static')
const Koa = require('koa')
const cors = require('@koa/cors')
const app = new Koa()
const PORT = process.env.PORT || 8081
const KoaBodyParser = require('koa-bodyparser')
const router = require('./router')

app.use(KoaBodyParser())
app.use(cors({ allowMethods: ['GET', 'POST', 'PUT', 'DELETE'] }))
app.use(serve('./dist/spa'))
app.use(router.routes())

const server = app.listen(PORT, () => {
  console.log(`Koa app started and listening on port: ${PORT}`)
})

module.exports = server
