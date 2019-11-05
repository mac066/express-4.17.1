var server = require('tk102');
server.createServer({
    port: 8090, // default 0 = random, see 'listening' event
    connections: 1000, // simultaneous connections
    // idle timeout in seconds
})
server.on('listening', function(listen) {
    console.log(listen);
    // listen = { port: 56751, family: 2, address: '0.0.0.0' }
})
console.log('server start on 8090')
server.on('data',console.log)
