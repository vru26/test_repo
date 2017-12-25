var express = require('express');
var app = express();
app.use(express.urlencoded());
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/Form.html');
})
app.post('/data', function(req, res) {
    process.stdout.write(req.body.first_name);
})

app.listen(8080, function() {})