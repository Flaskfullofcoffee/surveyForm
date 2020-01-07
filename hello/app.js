const http = require('http');  // create an http variable

let server = http.createServer((req, resp) => {
  resp.writeHead(200, {'content-type': 'text/plain'});
  resp.end('Fortnite is for noobs')
})

server.listen(4000);
