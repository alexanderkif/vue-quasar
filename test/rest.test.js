/* eslint-disable no-undef */

let chai = require('chai')
let should = chai.should()
let chaiHttp = require('chai-http')
const server = require('../rest/index')

chai.use(chaiHttp)

describe('routes : index', () => {
  describe('GET /helloworld', () => {
    it('should return helloworld', (done) => {
      chai.request(server)
        .get('/helloworld')
        .end((err, res) => {
          should.not.exist(err)
          res.status.should.eql(200)
          res.type.should.eql('application/json')
          res.body.status.should.equal('success')
          res.body.should.be.a('object')
          res.body.data.should.eql('Hello World')
          // res.body.should.have.property('data').eql('Hello World')
          // res.body.should.be.a('array')
          // res.body.length.should.be.eql(0)
          done()
        })
    })
  })
})
