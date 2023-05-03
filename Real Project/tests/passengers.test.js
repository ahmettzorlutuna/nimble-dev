const app = require('../')
const server = require('../')
const request = require('supertest')(app)

test('create a new passenger', async () => {
    const passengerToCreate = {
        name: 'Ahmet',
        location: 'Canada'
    }
    const response = await request.post('/passengers').send(passengerToCreate)

    expect(response.status).toBe(200)
})

afterAll(() => server.close())