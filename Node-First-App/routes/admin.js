const express = require('express');

const router = express.Router();



router.use("/addproduct", (req, res, next) => {
    //console.log(`I am another middleware`);
    //console.log(req.originalUrl);
    res.send(
      '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</form>'
    );
    //res.send("<h1>Hello from addproduct1234ddd56123</h1>");
  });
  
  router.use("/product", (req, res) => {
    console.log(req.body);
  
    res.redirect("/");
  });

module.exports = Router;