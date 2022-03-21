class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    growl() {
        console.log('grrrrr!');
    }
}

// TODO 1
module.exports = Tiger;



/* 
elesaikan kode yang ditandai TODO dengan ketentuan berikut:

TODO 1 : Ekspor class Tiger agar dapat digunakan pada berkas JavaScript lain.
TODO 2 : Ekspor class Wolf agar dapat digunakan pada berkas JavaScript lain.
TODO 3 : Import class Tiger dari berkas Tiger.js.
TODO 4 : Import class Wolf dari berkas Wolf.js. 
*/