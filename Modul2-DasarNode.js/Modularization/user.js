const firstName = 'Harry';
const lastName = 'Potter';

/* gunakan object literal
untuk mengekspor lebih dari satu nilai. */
module.exports = {firstName, lastName};








/*  
* Memudahkan developer efisiensi hal umum, Modul bawaan: core modules
* bisa mengimpor core modules dengan fungsi yang sama
* contoh // !Mengimpor core module http
* code //!  > const http = require('http'); 


Ada 3 jenis modul pada Node.js, Anda sudah mengetahui dua di antaranya. Berikut rinciannya:
* local module : module yang dibuat secara lokal berlokasi pada Node.js project Anda.
* core module : module bawaan Node.js berlokasi di folder lib di mana Node.js terpasang pada komputer Anda. Core module dapat digunakan di mana saja.
* third party module : module yang dipasang melalui Node Package Manager. Bila third party module dipasang secara lokal, maka modul akan disimpan pada folder node_modules di Node.js project Anda. Bila dipasang secara global, ia akan disimpan pada folder node_modules di lokasi Node.js dipasang.
*/
