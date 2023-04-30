const fs = require("fs");
const path = require("path");

const readFile = (callback) => {
  fs.readFile(path.join(__dirname, "employees.json"), "utf-8", (err, data) => {
    if (err) throw err;
    employee = JSON.parse(data);
    callback(employee)
  });
};

module.exports = {
    readFile
}
