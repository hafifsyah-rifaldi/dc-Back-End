/*  const requestListener = (request, response) => {
    response.write('<html>');
   response.write('<body>');
    response.write('<h1>Hello, World!</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();
}; */

/* Seperti yang sudah Anda ketahui juga,
 method end() pada WritableStream dapat digunakan untuk menulis data terakhir sebelum proses penulisan diakhiri. Jadi,
 untuk kasus di atas dapat dipersingkat penulisannya menjadi seperti ini. */

 const requestListener = (request, response) => {
    response.end('<html><body><h1>Hello, World!</h1></body></html>');
};