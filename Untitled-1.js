var http = require('http');
http.createServer (function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    if(req.url=="/authors") {
        res.write("Author");
    }
    else {
        res.write(req.url);
    }
    res.end();
}).listen(8080);