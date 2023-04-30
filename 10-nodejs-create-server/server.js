const http = require("http");
const router = require("./router/router");

const hostname = "localhost";
const port = 5900;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  router.routeFun(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
