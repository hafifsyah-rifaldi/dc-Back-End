const { nano } = require('nanoid'); // import nanoid dari package module library nanoid
const notes = require('./notes'); // import array dari notes.js


const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };

    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0; // Memanfaatkan method filter() berdasar id catatan

    // isSuccess untuk menentukan respons yang diberikan server
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                noteId: id
            },
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
    });
    response.code(500);
    return response;
};

//* Menambahkan fungsi getAllNotesHandler dan mengembalikan data dengan nilai notes di dalamnya
const getAllNotesHandler = () => ({
    status: 'success',
    data: {
        notes,
    },
});

//* Menambahkan fungsi getNoteByIdHandler
const getNoteByIdHandler = (request, h) => {
    const { id } = request.params; // dapatkan nilai id dari request.params
    
    const note = notes.filter((n) => n.id === id)[0]; // dapatkan objek note dengan id tersebut dengan memanfaatkan method array filter()

    if (note !== undefined) {
        return {
            status: 'success',
            data: {
                note,
            },
        };
    }

    const response = h.respone({
        status: 'fail',
        message: 'Catatan tidak ditemukan',
    });
    response.code(404);
    return response;
};

module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIdHandler };