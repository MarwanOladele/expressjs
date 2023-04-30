const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.json([{ name: "Marwan" }, { name: "Temitope" }]);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000...');
});
