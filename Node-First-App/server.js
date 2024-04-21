const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   console.log(`I am the middleware`);
//   next(); // Allow the request to the next middleware
// });

app.use("/", (req, res, next) => {
  // console.log(`I am another middleware`);
  //console.log(req.originalUrl);
  next();
  //res.send("<h1>Always runs</h1>");
  //next();
});

// app.use("/addproduct", (req, res, next) => {
//   //console.log(`I am another middleware`);
//   //console.log(req.originalUrl);
//   res.send(
//     '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</form>'
//   );
//   //res.send("<h1>Hello from addproduct1234ddd56123</h1>");
// });

// app.use("/product", (req, res) => {
//   console.log(req.body);

//   res.redirect("/");
// });
// app.use('/',(req, res, next) => {
//   console.log(`I am another middleware`);
//   console.log(req.url);
//   res.send("<h1>Hello from Express!!!12ddddd</h1>");
// });

// const server = http.createServer(app);

// server.listen(3000);

app.listen(2300);
