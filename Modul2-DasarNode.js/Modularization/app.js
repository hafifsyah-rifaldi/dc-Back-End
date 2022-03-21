/* Bila berkas coffee.js diletakkan di folder yang berbeda dengan app.js, contohnya memiliki struktur seperti ini:
    root folder:.
    ├── app.js
    ├── package.json
    └── lib
        └── coffee.js
    Maka import dengan alamat:
    > const coffee = require('./lib/coffee');
        */

const coffee = require('./coffee');

console.log(coffee);

/**
 * Jalankan perintah: //! node app.js
 *
 * output:
 * { name: 'Tubruk', price: 15000 }
 */