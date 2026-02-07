const express = require('express');
const app = express();
const userModel= require('./usermodel')

app.get('/',function(req,res){
    res.send('hey lets start with mongodb')
})

app.get('/create',async function(req,res){
 const createdUser = await userModel.create({
    name:'pragyansh',
    username:'pragyanshK',
    email: 'pragyansh@example.com'
 })
 res.send(createdUser);
})

app.listen(4000,function(){
    console.log('server is running on port 4000')   
})