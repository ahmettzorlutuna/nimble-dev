const { passengerDatabase, driverDatabase } = require("./database");
const Passenger = require("./models/passenger");
const Driver = require("./models/driver");
const print = require("./lib/print-booking-history");

const memo = new Passenger("Memo", "NJ");
const yali = new Passenger("Yali", "Miami");

const driver = new Driver("Driver", "Miami");

const booking1 = memo.book(driver, "Miami", "LosAngeles");
const booking2 = memo.book(driver, "İstanbul", "Esengeless");
const booking3 = memo.book(driver, "Tokyo", "Korea");
const booking6 = yali.book(driver, "LA", "Mıami");
const booking7 = yali.book(driver, "İstanbul", "Boston");


(async () => {
  try {
    // const passengers = await passengerDatabase.load()
    await passengerDatabase.save([yali, memo]);
    await driverDatabase.save([driver]);

    // const Betul = new Passenger("Betül","Esengelersss")
    // Betul.book(driver,"LosAngeles","Baküü")
    // await passengerDatabase.insert(Betul)
    // passengers.forEach(print)

  } catch (error) {
    return console.log(error);
  }
})()
