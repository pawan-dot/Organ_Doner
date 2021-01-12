var express = require("express");
var bodyParser = require("body-parser");
var ejs = require("ejs");
var path = require('path');
var app = express();


app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',require('./routes/index'));

app.get('/heart', (req, res) => {
    res.render('heart');
   });

   app.get('/cornea', (req, res) => {
    res.render('cornea');
   });

   app.get('/intestine', (req, res) => {
    res.render('intestine');
   });

   app.get('/kidney', (req, res) => {
    res.render('kidney');
   });

   app.get('/liver', (req, res) => {
    res.render('liver');
   });

   app.get('/lungs', (req, res) => {
    res.render('lungs');
   });

   app.get('/pancreas', (req, res) => {
    res.render('pancreas');
   });

   app.get('/tissue', (req, res) => {
    res.render('tissue');
   });

app.listen(3000,function(err){ 
    if(err) return next(err);
    else{ 
        console.log("server started at port 3000");
    }
})
