/*  Membuat HTTP Server HAPI
   ! > npm install @hapi/hapi
*/

const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();

/* 
* Bedah Kode 
! HTTP server sendiri dibuat melalui method Hapi.server(). 
! Method ini menerima satu parameter yakni ServerOptions. 
! ServerOptions merupakan objek yang menampung konfigurasi dari server yang hendak dibuat, salah satunya kita bisa menetapkan properti port dan host.

! Proses menjalankan server (server.start()) dilakukan secara asynchronous. Karena itu, kita perlu menjalankannya di dalam fungsi async dan memanggil server.start() menggunakan await.

! Setelah server berhasil berjalan, Anda bisa melihat alamat lengkap dan port di mana server dijalankan melalui properti server.info.uri.
*/