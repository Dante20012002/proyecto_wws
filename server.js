// Archivo temporal solo para Setup Node.js App
// Este archivo NO se usa en producción, solo para instalar dependencias
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Temp server for npm install');
});
server.listen(3001);





