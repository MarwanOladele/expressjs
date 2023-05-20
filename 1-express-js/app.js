const express = require("express");
const app = express();

const { people } = require("./data");

app.use(express.static("./methods-public"));

// To parse form data
app.use(express.urlencoded({ extended: false }));

// To parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(404).json({ success: false, msg: "imput a value" });
  }
  res.status(201).json({ sucess: true, person: [...people, {id: 7, name}] });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please input a name");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
