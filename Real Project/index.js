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

//Promise without await
// passengerDatabase.save([memo,yali]).then(() => {
//   console.log("Wrote passenger");
//   driverDatabase.save([driver]).then(() => {
//     console.log("wrote driver");
//     const ahmet = Passenger.create({name: "Ahmet", location: "LA"})

//     passengerDatabase.insert(ahmet)
//       .then(() => passengerDatabase.load())
//       .then(passengers => {
//         passengers.forEach(print)
//       })
//   })
// })

//Promise with await
(async () => {
  try {
    await passengerDatabase.save([memo, yali]);
    await driverDatabase.save([driver]);
    const passengers = await passengerDatabase.load()
    console.log(passengers);
    // const yali2 = await passengerDatabase.findByName("Yali")
    // yali2.book(driver,"Miami","Esengeless")
    // console.log(yali2)
    // const passengers = await passengerDatabase.load();
    // // passengers.forEach(print);
  } catch (error) {
    return console.log(error);
  }
})()

// console.log("Write dbs");
// passengerDatabase.save([memo, yali], () => {
//   console.log("Wrote passenger");
//   driverDatabase.save([driver], () => {
//     console.log("done");
//     const ahmet = Passenger.create({name: "Ahmet", location: "LA"})
//     passengerDatabase.insert(ahmet, ()=> {
//       passengerDatabase.load((err,passengers) => {
//         passengers.forEach(print)
//       })
//     })
//   })
// })
//adssadas
