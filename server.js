const express = require('express');
require('db/mongoose/mongoose.js');
const hbs = require('hbs');
const app = express();
let user = require('DB/models/user');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');
app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('index.hbs');
})
app.post('/results',(req,res)=>{
    res.render('results.hbs',{name:req.body.name,email:req.body.email})
})
app.listen(3000,()=>{
    console.log("Runing on Port 3000")
})