/* 
* Response Toolkit:
* Fungsi handler pada Hapi memiliki dua parameters, yakni request dan h. 
*/

/* 
* Parameter h tidak hanya berfungsi untuk menetapkan status kode respons. 
* Melalui h, Anda juga bisa menetapkan header response, content type, content length,
* dan masih banyak lagi.  */

// Detailed notation
const handler = (request, h) => {
    const response = h.response('success');
    response.type('text/plain');
    response.header('X-Custom', 'some-value');
    return response;
};
 
// Chained notation
const handler = (request, h) => {
    return h.response('success')
        .type('text/plain')
        .header('X-Custom', 'some-value');
};