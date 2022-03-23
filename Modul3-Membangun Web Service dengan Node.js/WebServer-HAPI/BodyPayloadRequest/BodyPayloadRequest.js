/* Kapan pun client mengirimkan payload berupa JSON, 
payload tersebut dapat diakses pada route handler melalui 
properti request.payload. Contohnya seperti ini: */

server.route({
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
        const { username, password } = request.payload;
        return `Welcome ${username}!`;
    },
});

// Pada contoh di atas, handler menerima payload melalui request.payload. 
// Dalam kasus tersebut, client mengirimkan data login dengan struktur:
// ! > { "username": "harrypotter", "password": "encryptedpassword" }