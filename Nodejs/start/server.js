const http = require("http")

const hostname = "127.0.0.1"
const port = "9999"

var server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", 'text/plain');
    res.end('hello Nodejs\n');
})

server.listen(port, hostname, () => {
    console.log(`server is running http://${hostname}:${port}/`)
} )