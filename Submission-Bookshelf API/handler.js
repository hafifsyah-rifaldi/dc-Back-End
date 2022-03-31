const { nanoid } = require('nanoid'); // Import nanoid dari module
const books = require('./books') // Import dari books.js


// TODO Kriteria 1: API dapat menyimpan buku
const addBookHandler = (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = pageCount === readPage;
    const newBook = {
        id, name, year, author, summary, publisher, pageCount, readPage, reading, insertedAt, updatedAt, finished
    };  
    
    
    if (!name) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
    };
    
    if (readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    };
    books.push(newBook);
    
    const isSuccess = books.filter((book) => book.id === id).length > 0; // Memanfaatkan method filter()    
    // isSuccess untuk menentukan respons yang diberikan server
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id
            },
        });
        response.code(201);
        return response;
    }
    
    const response = h.response({
        status: 'error',
        message: 'Buku gagal ditambahkan',
    });
    response.code(500);
    return response;
};
 
// TODO Kriteria 2 : API dapat menampilkan seluruh buku
const getAllBookHandler = (request, h) => {
    const { id } = request.params;
    const book = books.filter((book) => book.id === id)[0];
         
    
    if (!book) {
        ({
            status: 'success',
            data:{
                books,
            },
        });
    }
    const response = h.response({
        status: 'success',
        data:{
            books: books.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher
            }))
        }
    })
    response.code(200);
    return response;


    
};


// TODO Kriteria 3 : API dapat menampilkan detail buku
const getBookIdHandler = (request, h) => {
    const { bookId } = request.params; 
    
    const book = books.filter((book) => book.id === bookId)[0];
    if (book !== undefined) {
        const response = h.response({
            status: 'success',
            data: {
                book
            },
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
    });
    response.code(404);
    return response;
    

};

// TODO Kriteria 4 : API dapat mengubah data buku

const editBookIdHandler = (request, h) => {
    const { bookId } = request.params; //Mendapatkan nilai Id

    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload; // Dapatkan data yang dikirim client melalui body request
    const updatedAt = new Date().toISOString(); // Dapatkan nilai terbaru dari updateAt menggunakan new Date().toISOString()
    const finished = pageCount === readPage;
    const index = books.findIndex((book) => book.id === bookId); // Dapatkan id menggunakan method array findIndex()

    if (name === undefined) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
    }
    
    if ( readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    }
    
    if (index !== -1) {
        books[index] = {
            ...books[index],
            name, 
            year, 
            author, 
            summary, 
            publisher, 
            pageCount, 
            readPage, 
            reading,
            finished,
            updatedAt,
        };
        
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui',
        });
        response.code(200);
        return response;
    };

    const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
    response.code(404);
    return response;    
};


// TODO Kriteria 5 : API dapat menghapus buku
const deleteBookByIdHandler = (request, h) => {
    const { bookId } = request.params;

    const index = books.findIndex((book) => book.id === bookId);

    if (index !== -1){
        books.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil dihapus'
        })
        response.code(200);
        return response;
    };
    
    const response = h.response({
            status: 'fail',
            message: 'Buku gagal dihapus. Id tidak ditemukan'
        });
    response.code(404);
    return response;  
};


module.exports = { addBookHandler, getAllBookHandler, getBookIdHandler, editBookIdHandler, deleteBookByIdHandler };