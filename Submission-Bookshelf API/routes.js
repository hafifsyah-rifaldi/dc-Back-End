const {addBookHandler} = require('./handler');
const routes = [
    {
        method: 'POST',
        path: '/bookshelf',
        handler: () => addBookHandler,
    },
];

module.exports = routes;