var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Tet/summer.html');
})

app.get('/img', function (req, res) {
    res.sendFile(__dirname + '/Tet/Nov17.png');
})

app.listen(8080, function() {})