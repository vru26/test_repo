var request = require('request');
var post_list, user_list, post_list_len = 0, user_list_len = 0, count = 0;

var opn = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    Headers: {'Accept': 'application/json'}
};
request(opn, function(err, res, body, 
    post_list_len = calculate_length(body)) {
    /*post_list = JSON.parse(body);
    //post_list_len = calculate_length(post_list);
    //console.log(res);
    console.log(post_list);
    //return post_list_len;*/
});

console.log('hi');

var options = {
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'GET',
    Headers: {'Accept': 'application/json'}
};
var calc = function(bdy) {
    user_list = JSON.parse(bdy);
    user_list_len = user_list.length;
    return user_list_len;
};
request(options, function(error, response, bdy, calc(bdy)) {
    //calc(bdy);
    /*user_list = JSON.parse(bdy);
    //user_list_len = calculate_user_length(user_list);
    console.log(user_list_len);
    //return user_list_len;*/
});

function calculate_length(body) {
   // console.log(body);
    post_list = JSON.parse(body);
    post_list_len = post_list.length;
    console.log(post_list_len);
    return post_list_len;
}

function calculate_user_length(bdy) {
    //console.log(bdy);
    user_list = JSON.parse(bdy);
    user_list_len = user_list.length;
    //return user_list_len;
}
console.log(user_list_len);
console.log(post_list_len);

console.log(user_list_len);
console.log(post_list_len);