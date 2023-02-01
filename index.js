const express = require('express'); 
const app = express(); 
require('dotenv').config({}); 
const bodyParser = require('body-parser');

app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json())

app.post('/login', function (req, res) {
    try {
        console.log(req.body.email, req.body.password)
        
        if (!req.body.email || !req.body.password) {
            return res.send(`<h2>email and password cannot be empty</h2>`)
        }else {
            return res.send('1. email and password have been submitted<br/>2. /login route (server) is checking whether they are correct or not<br/>========2.1. yes there are correct, <b>you can access the web app</b><br/>========2.2. no there are not correct, <b>web app access denied</b><br/>')
        }
        
        //res.send('works')
    } catch (e) {
        console.log(e)
    }
})


app.listen(process.env.PORT, function () {
    console.log('server -- up and running...')
})