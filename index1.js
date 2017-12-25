var express = require('express');
var app = express();
var module = require('./Task_1_Printing_Hello');
var mo = require('./Task_3&4_Setting_Cookie')
app.use('/', module);
app.use('/setCookie', mo);
app.use('/robots.txt', require('./Task_5_Denying_Access.js'));
app.get('/')
app.listen(8080);