var express = require('express');
var app = express();
app.set("view engine","pug")
app.get('/',function ( req, res){
    res.render('index');
});
var server1 = app.listen(6000,function() {
    console.log('Node server is running...');
});
