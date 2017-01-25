var express = require('express');
var app = express();
var open = require('open');
var path = require('path');
var cache = [];
var error = 'gggg';
// viewed at http://localhost:8080

app.get('/', function(req, res) {
    console.log("some one connected");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/form', function(req, res) {
     for(var keys in req.query){
             if(!req.query[keys]){
                 console.log('error '+keys);
                 error =req.query[keys];
        } else{
      cache.push(req.query);

   }
}

  res.status(200).send('please enter'+ error);
    console.log('i am your error '+ error);
}
);
app.listen(8080);
open("127.0.0.1:8080", "chrome");