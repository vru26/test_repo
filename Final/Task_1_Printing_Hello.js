var express = require('express');
//var app = express();
var router = express.Router();

router.get('/', function (req, res, next) {
    res.write("Hello World - Vrushabh");
})
module.exports = router;
/*app.listen(8080, function() {
    process.stdout.write("hi");
})*/