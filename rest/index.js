
const Koa = require('koa')
const app = new Koa()
const PORT = 8080
const KoaBodyParser = require('koa-bodyparser')

app.use(KoaBodyParser())

app.use(require('./helloWorldRouter'))

const server = app.listen(PORT, () => {
  console.log(`Koa app started and listening on port: ${PORT}`)
})

module.exports = server
