/**
 * Created by jialao on 2016/7/20.
 */
process.env.NODE_ENV = process.env.NODE_ENV||'development'
var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
// var serverRender = require('./dist/server.js')

var app = express();
var port =  process.env.PORT||4000;

app.use(express.static(path.join(__dirname)));

app.use(favicon(path.join(__dirname,'public','favicon.jpg')));
app.set('views',path.join(__dirname,'public'));
app.set('view engine','ejs')

app.get('/',function(req,res,next){
    res.sendFile(path.join(__dirname,'index.html'))
});

app.listen(port,function(err){
    if(err){
        console.log(err)
    }
    console.log('listening on http://localhost:%s/',port);
})
