// const http = require("http");

const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html");
    return res.end();
  }

  if (url === "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
      console.log(1);
    });
    req.on("end", () => {
      console.log(2);
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      const message = parseBody.split("=")[1];
      fs.writeFileSync("message.txt", message, (error)=> {
        res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
      });
    });
    console.log(3);
  }
}

module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: 'Some hard code value'
// };

//module.exports.handler = requestHandler;

// shortcut
//exports.handler = requestHandler;
//});
//console.log(req.url, req.method, req.headers);
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<body><h1> Hello </h1></body>");
//   res.write("</html");
//   res.end();
//process.exit(1);

// server.listen(3000);
