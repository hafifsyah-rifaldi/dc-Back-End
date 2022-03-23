const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 /*    response.end('<h1>Halo HTTP Server!</h1>'); */

    // * Menambahkan Handling Request Method
    const { method } = request;

    if(method === 'GET') {
        response.end('<h1>Hello! Ini method GET</h1>');
    }
// ! Menambahkan logika stream blok POST
    if(method === 'POST') {
      let body = [];

      request.on('data', (chunk) => {
          body.push(chunk);
      });
      request.on('end', () => {
          body = Buffer.concat(body).toString();
          const { name } = JSON.parse(body);
          response.end(`<h1>Hai, ${name}!</h1>`);
      });
    }

};


const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
})


// * Lakukan perintah di terminal cmd
// TODO 1 : > curl -X GET http://localhost:5000
// TODO 2 : > curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Dicoding\"}"