const fs = require("fs");
const path = require("path");


const routeFun = (request, response) => {
    const url = request.url;

    if (url === "/") {
      fs.readFile(path.join(__dirname, '..', 'views', "index.html"), "utf8", (err, data) => {
        if (err) throw err;
        response.end(data);
      });
    } else if (url === "/about") {
      fs.readFile(path.join(__dirname, '..', 'views', "about.html"), "utf8", (err, data) => {
        if (err) throw err;
        response.end(data);
      });
    } else if (url === "/contact") {
      fs.readFile(path.join(__dirname, '..', 'views',"contact.html"), "utf8", (err, data) => {
        if (err) throw err;
        response.end(data);
      });
    } else {
      fs.readFile(path.join(__dirname,'..', 'views', "404.html"), "utf8", (err, data) => {
        if (err) throw err;
        response.end(data);
      });
    }
}

module.exports = {
    routeFun
}