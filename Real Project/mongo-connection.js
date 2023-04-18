// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Nimblee");
  console.log("Connected the DB !!");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your services has auth enabled
}
