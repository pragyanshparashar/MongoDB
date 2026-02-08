const express = require('express');
const app = express();
const userModel= require('./usermodel')

app.get('/',function(req,res){
    res.send('hey lets start with mongodb')
})

app.get('/create',async function(req,res){
 const createdUser = await userModel.create({
    name:'tom',
    username:'tom cruise',
    email: 'tom@example.com'
 })
 res.send(createdUser);
})

app.get('/update',async function(req,res){
    const updatedUser = await userModel.findOneAndUpdate({username:'pragyanshK'},{name:'pragyanshparashara'},{new:true})
    res.send(updatedUser)
})

app.get('/read', async function(req,res){
    const readUser = await userModel.find()
    res.send(readUser);
})

app.listen(4000,function(){
    console.log('server is running on port 4000')   
})