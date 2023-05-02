const app = require('../index');
const mongoose = require("mongoose");

const request = require('supertest')(app);

test('create a new passenger', async () => {
    //Init
    const passengerToCreate = {
        name: 'Test passenger',
        location: 'Nef'
    }

    const response = await request
        .post('/passengers')
        .send(passengerToCreate)
        .expect(200)
    
        expect(response.body).toMatchObject(passengerToCreate)
})