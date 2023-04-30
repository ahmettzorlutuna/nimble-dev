const printAllBookings = require('../print-booking-history')

test('print passenger bookings', () => {
    const rv = printAllBookings(passenger)
    expect(rv).toBe(3);
})