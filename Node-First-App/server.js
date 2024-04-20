const http = require("http");
const fs = require('fs');

// function rqListener(req, res) {

// }

// http.createServer(function(req, res) {

// });

// http.createServer(rqListener);

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write('<head></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write("</html");
    return res.end();
  }

  if (url === '/message' && method == 'POST') {
    req.on('data', (chunk) => {

    });
    fs.writeFileSync('message.txt','Dummy');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
    }
  });
  //console.log(req.url, req.method, req.headers);
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<body><h1> Hello </h1></body>");
//   res.write("</html");
//   res.end();
  //process.exit(1);

server.listen(3000);
