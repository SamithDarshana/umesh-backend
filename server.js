const mongoose = require("mongoose");
const app = require("./app");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

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
