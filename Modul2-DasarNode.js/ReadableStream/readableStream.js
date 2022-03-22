const readableStream = fs.createReadStream('./article.txt', {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    console.log('Done');
});

/* Fungsi createReadStream() menerima dua argumen. 
Yang pertama adalah lokasi berkas yang hendak dibaca, 
dan yang kedua adalah objek konfigurasi. Di dalam objek konfigurasi kita bisa menetapkan ukuran buffer melalui properti highWaterMark. 
Nilai default dari properti ini adalah 16384 bytes (16kb).  */


/* 
* Output:
* [Stream di ][Node.js]
* [Teknik str][eam merupa][kan salah ][satu konse][p fundamen][tal yang m][endukung a][plikasi No][deJS beker][ja. Teknik][ ini dapat][ menangani][ kasus bac][a tulis be][rkas, komu][nikasi jar][ingan, ata][u beban ke][rja apapun][ agar dapa][t berjalan][ dengan le][bih efisie][n.][null]Done
*/