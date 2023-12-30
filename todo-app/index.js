const { request } = require('express')
const express = require('express')
const app = express()

app.get("/", (request, response) =>{
       response.send("hello world")
});

app.listen(3000, () =>{
    console.log("started express server at port 3000")
});