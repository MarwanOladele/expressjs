const express = require("express");
const app = express();

// import people routes
const people = require("./routes/people");

// import login routes
const login = require("./routes/auth");

app.use(express.static("./methods-public"));

// To parse form data
app.use(express.urlencoded({ extended: false }));

// To parse json
app.use(express.json());

// use people routes
app.use("/api/people", people);

// use login routes
app.use("/login", login);

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
