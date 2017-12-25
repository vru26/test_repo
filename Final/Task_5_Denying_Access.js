var express = require('express');
var app = express();

app.get('/robots.txt', function(req, res) {
    res.writeHead(401, {'Content-Type': 'text/html'});
    /*res.redirect('http://httpbin.org/deny')
    res.status(401);*/
    return res.end('Access Denied.');
})
app.listen(8080, function() {});