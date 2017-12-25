var express = require('express');
var cookieParser = require('cookie-parser')
var app = express();

app.use(cookieParser());
app.get('/setCookie', function(req, res) {
    res.cookie('myCookie', '1271997', {maxAge : 12797}).send('');
});

app.get('/readCookie', function(req, res) {
    //console.log(req.cookies['myCookie']);
    res.write(req.cookies['myCookie']);
});

app.listen(8080, function() {});