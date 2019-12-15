const app = require('./intro') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

it('gets the test endpoint', async done => {
    const response = await request.post('/getir')
  
    expect(response.status).toBe(200)
    done()
  })