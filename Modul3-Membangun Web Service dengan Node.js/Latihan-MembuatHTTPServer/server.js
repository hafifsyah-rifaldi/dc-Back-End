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

    if(method === 'POST') {
        response.end('<h1>Hai! Ini method POST</h1>');
    }

    if(method === 'PUT') {
        response.end('<h1>Bonjour! Ini method PUT</h1>');
    }

    if(method === 'DELETE') {
        response.end('<h1>Salam! Ini method DELETE</h1>');
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
// TODO 2 : > curl -X POST http://localhost:5000
// TODO 3 : > curl -X PUT http://localhost:5000
// TODO 4 : > curl -X DELETE http://localhost:5000