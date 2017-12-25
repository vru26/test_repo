var express = require('express');
var cookieParser = require('cookie-parser')
var router = express.Router();
//var app = express();

router.use(cookieParser());
router.get('/setCookie', function(req, res) {
    res.cookie('myCookie', '1271997', {maxAge : 12797}).send('');
});

router.get('/readCookie', function(req, res) {
    //console.log(req.cookies['myCookie']);
    res.write(req.cookies['myCookie']);
});
module.exports = router;
//app.listen(8080, function() {});