const fs = require("fs");
const path = require("path");

const writeFile = (path, contents) => {
  fs.writeFile(path, contents, (err) => {
    if (err) {
      throw err;
    }
    console.log('Data added successfully');
  });
};

module.exports = {
    writeFile
}
