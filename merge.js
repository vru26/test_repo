var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var request = require('request');
var async = require('async');

//Task 1- Printing Hello World.
app.get('/', function (req, res, next) {
    res.write("Hello World - Vrushabh");
})


//Task 2- Displaying a list of authors & a total count of their posts.
var function_stack = [];
var post_data, user_details;
var no_of_users, no_of_posts;
var count = 0;
var html = '';
var temp;

var post_options = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    Headers: {'Accept': 'application/json'}
};
var fetch_posts = function(callback) {
    request(post_options, function(err, res, body) {
        post_data = JSON.parse(body);
        callback(null, post_data);
    })
};

var user_options = {
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'GET',
    Headers: {'Accept': 'application/json'}
};
var fetch_user_details = function(callback) {
    request(user_options, function(err, res, body) {
        user_details = JSON.parse(body);
        callback(null, user_details);
    })
}

function_stack.push(fetch_user_details);
function_stack.push(fetch_posts);

app.get('/authors', function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    async.parallel(function_stack, function(err, result) {
        no_of_users = result[0].length;
        no_of_posts = result[1].length;
        for(var i=0; i<no_of_users; i++) {
            for(var j=0; j<no_of_posts; j++) {
                if(result[0][i]['id'] == result[1][j]['userId'])
                    count++;
            }
            temp = '<li>'+result[0][i]['name'] + ': ' + count + '</li>';
            html += temp;
            count = 0;
        }
        res.write('<!DOCTYPE html><html><head><title>Author & Post Details</title></head><body><div><h2><u>Given below is a list of all the authors & the total number of posts made by them:-</u></h2></div><div><ul>'
            + html + '</ul></div></body></html>');
        res.end();
    })
})


//Task 3- Setting up a cookie.
app.use(cookieParser());
app.get('/setCookie', function(req, res) {
    res.cookie('myCookie', '123456789', {maxAge : 12700}).send('');
});


//Task 4- Displaying the key values of the cookie set previously.
app.get('/getCookie', function(req, res) {
    res.write('' + req.cookies['myCookie']);
});


//Task 5- Denying access.
app.get('/robots.txt', function(req, res, next) {
    res.writeHead(401, {'Content-Type': 'text/html'});
    return res.end('Access Denied.');
});


//Task 6.a- Rendering an HTML page.
app.get('/html', function (req, res) {
    res.sendFile(__dirname + '/html/summer.html');
});
//Task 6.b- Rendering an image.
app.get('/image', function (req, res) {
    res.sendFile(__dirname + '/Images/ferrari-portofino-2017-reveal-FRONT.jpg');
});


//Task 7- Sending the data as POST & logging the data to stdout.
app.use(express.urlencoded());
app.get('/input', function(req, res) {
    res.sendFile(__dirname + '/html/Form.html');
})
app.post('/data', function(req, res) {
    process.stdout.write("First name: " + req.body.first_name + "\nLast name: " + req.body.last_name);
    res.write("The following data has been sent:\n" + req.body.first_name + "\n" + req.body.last_name);
})

app.listen(8080, function() {
    console.log("Listening on port 8080!");
} );