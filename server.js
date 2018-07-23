const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

var ROOT = __dirname + '/public';

http.createServer((req, res) => {
  if(!checkAccess(req)) {
    res.statusCode = 403;
    res.end('Tell me the secret to access!');
    return;
  }
  sendFileSafe(url.parse(req.url).pathname, res);
}).listen(8080, '127.0.0.1');

function checkAccess(req) {
  return url.parse(req.url, true).query.secret == '1234';
}

function sendFileSafe(filePath, res) {
  try {
    filePath = decodeURIComponent(filePath);
  } catch (error) {
    res.statusCode = 400;
    res.end('Bad request');
    return;
  }

  if(~filePath.indexOf('\0')) {
    res.statusCode = 400;
    res.end('Bad request');
    return;
  }
  
  ROOT = path.normalize(ROOT);
  filePath = path.normalize(path.join(ROOT, filePath));

  if(filePath.indexOf(ROOT) != 0) {
    res.statusCode = 404;
    res.end('File not found');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if(err || !stats.isFile()) {
      res.statusCode = 404;
      res.end('File not found');
      return;
    }

    sendFile(filePath, res);
  });
}

function sendFile(filePath, res) {
  fs.readFile(filePath, (err, content) => {
    res.end(content);
  });
}