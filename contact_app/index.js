const express = require ("express");
const app = express();
const mongoss = require ("mongoose")

//Database connection

mongoose.connect()

//Middleware
app.use(express.urlencoded({extended : false}));
app.use(express.static('public'));

//Routes
app.get('/',(req,res)=>{});

app.get('/show-contact',(req,res)=>{res.render('home')})

app.get('/show-contact',(req,res)=>{res.render('show-contact')});
app.get('/add-contact',(req,res)=>{res.render('add-contact')});
app.post('/add-contact',(req,res)=>{});
app.get('/update-contact',(req,res)=>{res.render('update-contact')});
app.post('/update-contact',(req,res)=>{});
app.get('/delete-contact',(req,res)=>{});




app.listen(3002,() => {
    console.log("Server started successfully on port 3002.");
});

