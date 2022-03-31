const { addBookHandler, getAllBookHandler, getBookIdHandler, editBookIdHandler, deleteBookByIdHandler }  = require('./handler');

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
     // TODO Kriteria 3 : API dapat menampilkan detail buku
     {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookIdHandler,
    },
    // TODO Kriteria 4 : API dapat mengubah data buku
     {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookIdHandler,
    },
    // TODO Kriteria 5 : API dapat menghapus buku
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookByIdHandler,
    },
    
   
];

module.exports = routes;