const printAllBookings = require("../print-booking-history");

test("print passenger bookings when a passenger has a bookings", () => {
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

test("print warning message when a passenger has no bookings", () => {
  //İnit
const passenger = {
  name: "Armagan",
  bookings: [],
};

const consoleSpy = jest.spyOn(console, 'log')

//Test
printAllBookings(passenger);

//Assertions
expect(consoleSpy).toHaveBeenCalledWith('Armagan has no bookings yet')

//TearDown
consoleSpy.mockRestore()
});