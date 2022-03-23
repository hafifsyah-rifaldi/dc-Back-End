const http = require('http');

const requestListener = (request, response) => {
    // mengubah conten type text/html -> application/json
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
    

    // * Menambahkan Handling Request Method dan properti url
    const { method, url } = request;

    if(url === '/') {
        // ! TODO 2: logika respons bila url bernilai '/'
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }

    } else if(url === '/about') {
        // ! TODO 3: logika respons bila url bernilai '/about'
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Halo! Ini adalah halaman about ');
        } else if(method === 'POST') {
            // ! Menambahkan logika stream blok POST
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
                });
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }

    } else {
        // ! TODO 1: logika respons bila url bukan '/' atau '/about'
        response.statusCode = 404;
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }

};


const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
})


// * Lakukan perintah di terminal cmd
// ! > curl -X GET http://localhost:5000/about
// output: <h1>Halo! Ini adalah halaman about</h1>
// ! > curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Dicoding\"}"
// output: <h1>Halo, Dicoding! Ini adalah halaman about</h1>
// ! > curl -X PUT http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan PUT request</h1>
// ! > curl -X DELETE http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan DELETE request</h1>