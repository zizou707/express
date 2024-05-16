const { title } = require('process');
const ejs = require('ejs');

var http = require('http'),
    express = require('express'),
    app = express(),
    fs = require('fs');

    app.set('view engine', 'pug');
      

app.get('/',(req,res) =>{
    res.render('home.ejs',{title:'HOME'});
});

app.get('/home',(req,res) =>{
    res.render('home');
});

app.get('/services',(req,res) =>{
    res.render('services');
});

app.get('/contact',(req,res) =>{
    res.render('contact');
});

app.listen(5501, 'localhost' , ()=>{
    console.log('5501 connected');
})