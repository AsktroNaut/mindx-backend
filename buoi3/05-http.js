const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to home page')
    } else if (req.url === '/about') {
        res.end('About Page')
    } else {
        res.end(string.bold( '404 loi roi' ))
    }
})

server.listen(5000)