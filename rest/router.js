
// const fs = require('fs')
// const path = require('path')
const Router = require('koa-router')
const arts = require('./arts')
const BASE_URL = '/arts'

var router = new Router()

router.get(`${BASE_URL}`, async (ctx) => {
  try {
    const result = await arts.getAllArts(ctx)
    printResult(result, ctx)
  } catch (err) {
    console.log(err)
  }
})

router.get(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const result = await arts.getSingleArt(ctx.params.id)
    printResult(result, ctx)
  } catch (err) {
    console.log(err)
  }
})

router.post(`${BASE_URL}`, async (ctx) => {
  try {
    const result = await arts.addArt(ctx.request.body)
    printResult(result, ctx)
  } catch (err) {
    console.log(err)
  }
})

router.put(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const result = await arts.updateArt(ctx.params.id, ctx.request.body)
    printResult(result, ctx)
  } catch (err) {
    console.log(err)
  }
})

router.delete(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const result = await arts.deleteArt(ctx.params.id)
    printResult(result, ctx)
  } catch (err) {
    console.log(err)
  }
})

function printResult (result, ctx) {
  // console.log(result)
  ctx.body = JSON.stringify(result)
  // ctx.status = 200
}

module.exports = router
