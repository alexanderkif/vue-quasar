
var serve = require('koa-static')
const Koa = require('koa')
const app = new Koa()
const PORT = process.env.PORT || 8080
const KoaBodyParser = require('koa-bodyparser')
const router = require('./router')

app.use(KoaBodyParser())

app.use(serve('./dist/spa'))

app.use(router.routes())

const server = app.listen(PORT, () => {
  console.log(`Koa app started and listening on port: ${PORT}`)
})

module.exports = server
