const lodash = require('lodash') // TODO

const myOddEvenArray = lodash.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
console.log(myOddEvenArray);

/* Tugas Anda ialah:
* Pasang package lodash pada proyek nodejs-basic.
* Gunakan package lodash pada TODO sehingga index.js dapat dieksekusi dengan baik. */

/* Bila Anda telah mengerjakan semuanya dengan benar, 
eksekusi berkas index.js dengan perintah:
* > node ./node-package-manager/index.js
 */