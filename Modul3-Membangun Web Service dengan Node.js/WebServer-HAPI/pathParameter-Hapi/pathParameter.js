server.route({
    method: 'GET',
    path: '/users/{username?}',   // ! membungkus path dengan tanda {} agar menjadi dicoding.com/users
    handler: (request, h) => {
        const { username } = request.params;
        return `Hello, ${username}!`;
    },
});

// ! Sekarang bila client meminta pada alamat ‘/users/dicoding’, server menanggapi dengan ‘Hello, dicoding!’; 
// ! dan bila client meminta hanya pada path ‘/users’, server akan menanggapinya dengan ‘Hello, stranger!’.