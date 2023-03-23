const { passengerDatabase, driverDatabase } = require("./database");
const Passenger = require("./models/passenger");
const Driver = require("./models/driver");
const print = require("./lib/print-booking-history");

const memo = new Passenger("Memo", "NJ");
const yali = new Passenger("Yali", "Miami");
const max = new Passenger("Max", "Spa");

const driver = new Driver("Driver", "Miami");

const booking1 = memo.book(driver, "Miami", "LosAngeles");
const booking2 = memo.book(driver, "İstanbul", "Esengeless");
const booking3 = memo.book(driver, "Tokyo", "Korea");
const booking6 = yali.book(driver, "LA", "Mıami");
const booking7 = yali.book(driver, "İstanbul", "Boston");

(async () => {
  try {
    // await passengerDatabase.save([yali, memo]);
    // await driverDatabase.save([driver]);
    // await passengerDatabase.insert([max])
    // await passengerDatabase.update(max)
    const data = await passengerDatabase.load();
    console.log(data);
  } catch (error) {
    return console.log(error);
  }
})();