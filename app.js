const express=require('express')
const app=express();

app.use((eq,res,next)=>{
    console.log("i am in middle ware 1")
    next()
})

app.use((req,res,next)=>{
    console.log("i am in middle ware 2")
    res.send('<h1>I am Bhanu!</h1>')
})

app.listen(3000);