var express = require('express');
//var app = express();
var router = express.Router();
router.get('/robots.txt', function(req, res, next) {
    res.writeHead(401, {'Content-Type': 'text/html'});
    /*res.redirect('http://httpbin.org/deny')
    res.status(401);*/
    return res.end('Access Denied.');
})
//app.listen(8080, function() {});
module.exports = router;