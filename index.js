var express = require('express')
var app = express()
var fs = require('fs');

app.get('/test', function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("Helo");
	});

app.get('/authors', function (req, res) {
	   res.writeHead(200, {'Content-Type': 'text/html'});
	   fs.readFile('./link.html', null, function(error, data){
		   res.write(data);
	   });
  //res.send('https://jsonplaceholder.typicode.com/users')
  //res.render('link');
});
app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
});