const { addBookHandler, getAllBookHandler}  = require('./handler');

const routes = [
    // TODO Kriteria 1: API dapat menyimpan buku
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    // TODO Kriteria 2: API dapat menampilkan seluruh buku
    {
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler,
    },
];

module.exports = routes;