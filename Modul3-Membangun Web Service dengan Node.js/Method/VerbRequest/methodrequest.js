/* const requestListener = (request, response) => {
    const method = request.method;
}; */

/*  Atau cara lebih clean
* menggunakan object destructuring */

const requestListener = (request, response) => {
    const { method } = request;

    if(method === 'GET') {
        //response ketika GET
    }

    if(method === 'POST') {
        //response ketika POST
    }

    // Anda bisa mengevaluasi tipe method lainnya
};