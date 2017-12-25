var async = require('async');
var request = require('request');
var express = require('express');
var app = express();
var fn_stack = [];
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
}

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

fn_stack.push(fetch_user_details);
fn_stack.push(fetch_posts);

app.get('/authors', function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    async.parallel(fn_stack, function(err, result) {
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

app.listen(8080);