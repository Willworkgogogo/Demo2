var http = require("http")

http.createServer((req, res) => {
	res.writeHead(200, {"ContentType": "text/plain"})
	res.write("hello world\n")
	res.end()
}).listen(9999, ()=>{
	console.log("server start")
})