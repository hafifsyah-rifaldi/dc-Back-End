const requestListener = (request, response) => {
    // memberitahu client bahwa request resource yang diminta tidak ada.
    response.statusCode = 404;

    // 404 defaultnya adalah 'not found'
    // Ketahuilah bahwa Anda sebaiknya tidak mengubah statusMessage dari nilai default bila tidak diperlukan. Walaupun hanya sekadar menerjemahkannya menjadi “Tidak ditemukan”.
    response.statusMessage = 'User is not found';
};