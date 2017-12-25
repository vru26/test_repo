var express = require('express');
var router = express.Router();
var request = require('request');
var app = express();
// Urls for App Center REST functions
var url = 'https://jsonplaceholder.typicode.com/users';

/* GET list of recent reports */
/*router.get('/testapi', function(req, res, next) {
  res.render('testapi', { title: 'List Recent Reports' });
});*/

/* TEST: function to GET report list */
router.get('/list', function(req, res){
  request({
    url: url,
    json: true
  }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        res.send(body) // Print the json response
    }
  })
});

app.listen(8080);