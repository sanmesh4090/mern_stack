var express = require('express');
var app = express();
app.get('/', function(req,res){
    console.log(req.app);
    res.send("Hello World!");
});
app.listen(4000);
