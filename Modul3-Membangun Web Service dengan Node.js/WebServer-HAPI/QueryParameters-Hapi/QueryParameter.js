// ! Data yang dikirim melalui query memiliki format key=value. Contohnya:
// ! > localhost:5000?name=harry&location=bali


/* Contoh di atas memiliki dua query parameter. Yang pertama adalah name=harry dan location=bali. 
Di Hapi, Anda bisa mendapatkan nilai dari query parameter melalui request.query. */

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const { name, location } = request.query;
        return `Hello, ${name} from ${location}`;
    },
});