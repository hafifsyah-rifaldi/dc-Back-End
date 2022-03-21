const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Hello ${firstName} ${lastName}`);


/* Jalankan baris perintah berikut:
    > node process-argv.js harry potter 
- Element pertama : Alamat (path) lengkap dari lokasi node yang menjalankan prosesnya. 
- Element kedua : Alamat (path) berkas JavaScript yang dieksekusi (app.js)
- Element ketiga : “harry”
- Element keempat : “potter” */