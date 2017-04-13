process.env.NODE_ENV = 'test';

let chai = require('chai');
let should = chai.should();
let chaiHttp = require('chai-http');
let server = require('../server.js');

chai.use(chaiHttp)

describe('garage routes', ()=>{
  it('GET should return an array of items', (done)=>{
    chai.request(server)
    .get('/api/items')
    .end((err,res)=>{
      res.should.have.status(200)
      res.should.be.json
      res.body.should.be.a('array')
      done()
    })
  })
})
