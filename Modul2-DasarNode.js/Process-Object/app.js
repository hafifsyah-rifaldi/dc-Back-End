// Process Object
const server = new Server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
});

/* Jalankan pada Windows CMD
> SET NODE_ENV=production && node app.js 
*/

/* // perintah ini tidak akan berjalan
node -e 'process.env.foo = "bar"' && echo $foo */