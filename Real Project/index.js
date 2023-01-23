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
const booking6 = yali.book(driver, "LA", "Miami");
const booking7 = yali.book(driver, "İstanbul", "Boston");

console.log("Write dbs");
passengerDatabase.save([memo, yali], () => {
  console.log("Wrote passenger");
  driverDatabase.save([driver], () => {
    const ahmet = Passenger.create({name: "Ahmet", location: "LA"})
    passengerDatabase.insert(ahmet, () => {
        const passengerData = passengerDatabase.load();
        passengerData.forEach(print);
        console.log("done");
    })
  });
});
