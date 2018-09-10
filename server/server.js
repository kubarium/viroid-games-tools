const Hapi = require('hapi');
const {extract, findPassage} = require("./name-extractor")
// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 3000,
    routes: {
        cors: true
    }
});

// Add the route
server.route({
    method: [
        'GET', 'POST'
    ],
    path: '/name-extractor',
    handler: (request, h) => extract(request.payload.path)
});
server.route({
    method: [
        'GET', 'POST'
    ],
    path: '/find-passage',
    handler: (request, h) => findPassage(request.payload.name)
});

// Start the server
async function start() {

    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();