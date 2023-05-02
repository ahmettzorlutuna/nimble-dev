const printAllBookings = require("../print-booking-history");

test.skip("print passenger bookings", () => {
    //İnit
  const passenger = {
    name: "Armagan",
    bookings: [
      {
        passenger: { name: "Armagan" },
        driver: { name: "Stefan" },
        origin: "Kreuzberg",
        destination: "Neukolln",
      },
    ],
  };

  const consoleSpy = jest.spyOn(console, 'log')

  //Test
  printAllBookings(passenger);

  //Assertions
  expect(consoleSpy).toHaveBeenCalledWith('Armagan is going Neukolln from Kreuzberg now. Estimated time not calculated yet.')
  
  //TearDown
  consoleSpy.mockRestore()
});