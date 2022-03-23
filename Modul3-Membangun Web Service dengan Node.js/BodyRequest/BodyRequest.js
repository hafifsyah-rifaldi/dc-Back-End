// * Contoh mendapatkan data body:

const requestListener = (request, response) => {
    let body = [];

    request.on('data', (chunk) => {
        body.push(chunk);
    });

    request.on('end', () => {
        body = Buffer.concat(body).toString();
    });
};
/* 
* Mari kita bedah kodenya:
* Pertama, kita deklarasikan variabel body dan inisialisasikan nilainya dengan array kosong. Ini berfungsi untuk menampung buffer pada stream. 
* Lalu, ketika event data terjadi pada request, kita isi array body dengan chunk (potongan data) yang dibawa callback function pada event tersebut.
* Terakhir, ketika proses stream berakhir, maka event end akan terbangkitkan. Di sinilah kita mengubah variabel body yang sebelumnya menampung buffer menjadi data sebenarnya dalam bentuk string melalui perintah Buffer.concat(body).toString(). 
*/