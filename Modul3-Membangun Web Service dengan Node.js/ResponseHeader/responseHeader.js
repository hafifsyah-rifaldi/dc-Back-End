/* Caranya, lampirkan property ‘Content-Type’ dengan nilai MIME types yang disisipkan pada header response. 
Untuk menyisipkan nilai pada header response, 
gunakanlah method setHeader(). */

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('X-Powered-By', 'NodeJS');
};