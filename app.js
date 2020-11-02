const http=require('http');
const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const route = require('./routes');
// const adminROutes=require('./routes/server');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/test',route);
app.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','home.html'));

});
const server=http.createServer(app);
app.listen(9000);