const express = require('express');
const app = express();
const path = require('path')
const userModel = require('./model/user');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req,res){
  res.render ('index')
})

app.get('/read', async function(req,res){
    const users = await userModel.find()
    res.render ('read', {users})
})

app.post('/create', async function(req,res){
    const {name,email,image} = req.body;
    const createdUser = await userModel.create({
        name,
        email,
        image
    })
    res.redirect('/read');
})

app.get('/delete/:id', async function(req,res){
    const {id} = req.params;
    await userModel.findOneAndDelete({_id: id});
    res.redirect('/read');
})

app.get('/edit/:id', async function(req,res){
    const {id} = req.params;
    const user = await userModel.findOne({_id: id});
    res.render('edit', {user});
})

app.post('/Update/:id', async function(req,res){
    const {id} = req.params;
    const {name,email,image} = req.body;
    await userModel.findOneAndUpdate({_id: id}, {
        name,
        email,
        image
    })
    res.redirect('/read');
})

app.listen(4000, function(){
    console.log('Server is running on http://localhost:4000');
})