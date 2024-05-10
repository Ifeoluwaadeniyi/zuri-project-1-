const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  // Simulate an asynchronous operation with a delay
  setTimeout(() => {
    fs.readFile("index.html", function (error, data) {
      if (error) {
        res.writeHead(404);
        res.write("Error: file not found");
      } else {
        res.write(data);
      }
      res.end();
    });
  }, 500); // Simulate a delay of 100 milliseconds (1 second)
});
server.listen(port, hostname, function (error) {
  if (error) {
    console.log("Something went wrong: " + error);
  } else {
    console.log(`Server is listening on http://${hostname}:${port}/`);
  }
});
