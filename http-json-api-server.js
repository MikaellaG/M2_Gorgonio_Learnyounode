const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method === 'GET') {
    if (parsedUrl.pathname === '/api/parsetime') {
      const iso = parsedUrl.query.iso;
      const date = new Date(iso);

      const responseObj = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(responseObj));

    } else if (parsedUrl.pathname === '/api/unixtime') {
      const iso = parsedUrl.query.iso;
      const date = new Date(iso);

      const responseObj = {
        unixtime: date.getTime()
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(responseObj));
      
    } else {
      res.statusCode = 404;
      res.end();
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
