const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "database", "employes", "employees.json"),
  "utf-8",
  (err, data) => {
    const customer = JSON.parse(data);
    fs.writeFile(
      path.join(__dirname, "util", "customer.json"),
      JSON.stringify(customer),
      "utf-8",
      (err) => {
        if (err) throw err;
      }
    );
  }
);
