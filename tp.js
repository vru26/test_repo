const request = require('request');
var post_list;
var user_list;
var len = 0;
var len2 = 0;
var count = 0;

var options1 = {  
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    }
};
request(options1, function(err, res, body) {  
    post_list = JSON.parse(body);
    len = post_list.length;
    console.log(len);
});

var options = {  
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    }
};

request(options, function(err, res, body) {  
    user_list = JSON.parse(body);
    len2 = user_list.length;
    //console.log(json);
    //console.log(json[0]['name']);
    console.log(len2);
    console.log(len);
    for(var i=0; i<len2; i++) {
        count = 0;
        for(var j=0; j<len; j++) {
            if(user_list[i]['id'] == post_list[j]['userId']) {
                count++;
                //console.log(count);
            }
        } 
        console.log(count);
        
        //console.log(user_list[i]['id']);
    }
    
    //console.log(json.length);
});