const mongoose = require("mongoose");
const app = require("./app");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//Connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(PORT, () => {
      console.log(`Connected to database & Listening in port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
