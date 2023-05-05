const app = require('../')
const server = require('../')
const request = require('supertest')(app)

test('create a new passenger', async () => {
    const passengerToCreate = {
        name: 'Ahmet',
        location: 'Canada'
    }
    const response = await request
        .post('/passengers')
        .send(passengerToCreate)
    
    const passengerCreated = response.body
    expect(passengerCreated).toMatchObject(passengerToCreate)
    expect(passengerCreated.bookings).toEqual([])
})

// afterAll(() => server.close())