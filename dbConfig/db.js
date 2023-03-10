require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose
  .connect(
    process.env.DB_URL, { useNewUrlParser: true }   )
  .then(() => {
    console.log("Data base is connected successfully");
  })
  .catch((err) => {  console.log(err);  });
