const app = require('../')
const request = require('supertest')(app)

test('create a new booking', async () => {
    const passengerToCreate = {
        name: 'Ahmet',
        location: 'Canada'
    }

    const driverToCreate = {
        name: 'Test Driver',
        location: 'Alabama',
        age: 20
    }

    const origin = 'Moda'
    const destination = 'Yalova'

    const passengerResponse = await request
        .post('/passengers')
        .send(passengerToCreate)
        .expect(200)

    const driverResponse = await request
        .post('/drivers')
        .send(driverToCreate)
        .expect(200)

    const bookingResponse = await request
        .post(`/passengers/${passengerResponse.body._id}/bookings`)
        .send({
            driverId: driverResponse.body._id,
            origin,
            destination
        })
        .expect(200)
    

    const bookingCreated = bookingResponse.body
    console.log('booking',bookingCreated)
    expect(bookingCreated).toMatchObject({
        driver: driverResponse.body,
        passenger: passengerResponse.body,
        origin,
        destination
    })
})
