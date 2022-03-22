/* Node.js menyediakan
  EventEmitter class yang merupakan member events core module: */

  const { EventEmitter } = require('events');

  const myEventEmitter = new EventEmitter();

  /* Setiap instance dari EventEmitter akan memiliki fungsi on. 
  Pada fungsi tersebut, kita dapat menentukan aksi berdasarkan sebuah kejadian. 
  Contohnya seperti ini: */

  // * fungsi yang akan dijalankan ketika event coffee-order
  const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
  };

  // * menambahkan fungsi listener pada sebuah event menggunakan fungsi on
  const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}

/* Atau Anda bisa membuat satu fungsi khusus untuk menangani event. 
Biasanya fungsi ini memiliki nama ‘handler’ atau ‘listener’ 
pada akhir penamaanya. */

const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}

  // * mendaftarkan fungsi makeCoffee sebagai listener event
  myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

  /* Fungsi on menerima dua buah argumen, 
  yang pertama adalah nama event dan 
  yang kedua adalah listener atau fungsi yang akan dieksekusi ketika event terjadi. Dari kode di atas, jika terjadi event ‘coffee-order’, 
  maka fungsi makeCoffee akan dijalankan. */

  // * Memicu event 'coffee-order' terjadi.
  myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });


  /* 
  output: 
  Kopi Tubruk telah dibuat! */