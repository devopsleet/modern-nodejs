const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(`I am the middleware`);
  next(); // Allow the request to the next middleware
});

app.use((req, res, next) => {
  console.log(`I am another middleware`);
  console.log(req.url);
  res.send(`<h1>Hello from Express!!!123sssdddaaaqqqqqq</h1>`);
});

const server = http.createServer(app);

server.listen(3000);
