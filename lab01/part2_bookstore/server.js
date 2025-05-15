const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const pagesDir = path.join(__dirname, 'pages');

const server = http.createServer((req, res) => {
  const method = req.method;
  let fileName = req.url === '/' ? 'index.html' : req.url.slice(1) + '.html';
  let filePath = path.join(pagesDir, fileName);

  // Handle GET requests
  if (method === 'GET') {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        fs.readFile(path.join(pagesDir, '404.html'), (err404, notFoundPage) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(notFoundPage);
        });
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });

  // Handle POST requests
  } else if (method === 'POST') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      console.log("Received POST data:", body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'OK', received: body }));
    });

  // Other methods
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
