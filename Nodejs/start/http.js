// var http = require('http')

// http
//     .createServer(function(req, res) {
//         res.writeHead(200, {"Content-Type":"text/plain"})
//         res.write('Hello Node')
//         res.end()
//     })
//     .listen(2017)

const http = require('http')

const hostname = "127.0.0.1"
const port = "2017"

var server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/plain"})
    res.write("hello world\n")
    res.end()
})

server.listen(port, hostname, ()=>{
    console.log(`server is running at http://${hostname}:${port}`)
})