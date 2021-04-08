console.log('may the node be with you')

const express = require('express')
// const bodyParser = require('body-parser')
const app = express()

// This is middlewere, it used to be bodyParser, but now it is a part of the express module
// urlencoded tells express to extract data from the form element and add to the body property in the request object
app.use(express.urlencoded({extended: true}))

// these are handlers! 
app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes',(res,req) => {
    console.log(req.body);
})

app.listen(3000, function() {
    console.log('listening on 3000');
})