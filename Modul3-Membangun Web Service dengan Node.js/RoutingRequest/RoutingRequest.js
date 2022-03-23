// * Dalam http.clientRequest, untuk mendapat nilai url:
const requestListener = (request, response) => {
    // !Kombinasi  evaluasi dengan method, menentukan respons lebih spesifik
    const { url, method } = request;

    if(url === '/') {
        if(method === 'GET'){
        //curl -X GET http://localhost:5000/
        }

        // curl -X <any> http://localhost:5000/
    }

    if(url === '/about') {
        if(method == 'GET'){
        //curl -X GET http://localhost:5000/about
        }
        if(method === 'POST') {
            // curl -X POST http://localhost:5000/about
        }

        // curl -X <any> http://localhost:5000/about
    }
    
    // curl -X <any> http://localhost:5000/<any>
};


/* Properti url akan mengembalikan nilai path secara lengkap tanpa host dan port yang digunakan server. 
Contohnya, 
bila client meminta pada alamat http://localhost:5000/about atau http://localhost:5000/about/, 
maka url akan bernilai ‘/about’;  */