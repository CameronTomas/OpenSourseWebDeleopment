const express = require('express');
const hbs = require('hbs');

const app = express();
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/results',(req,res)=>{
    res.render('results',{result:req.body.box});
})
hbs.registerHelper("tablegen",function(numb){
    var str ='';
    str+='<table>';

    for(let i=0; i<numb; i++)
    {
        str+='<p>';
        str+= words;
        str+='</p>';
    }
    return new hbs.handlebars.SafeString(str);
});
app.listen(3000, ()=>{
    console.log('Server is running at localhost:3000');
})