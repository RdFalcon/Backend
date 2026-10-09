

require('dotenv').config();

const express = require('express');
const app = express()
const port = 2500;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/onion',function(req,res){
    res.send("Hello g kidda,welcome G")
})

app.get("/login",function(req,res){
    res.send("<h1> Hello Welcom to Jungle</h1>")
})

app.get("/youtube",function(req,res){
    res.send("<h2>Wecome to Youtube</h2>")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

