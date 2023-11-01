// config express and mongoose
const express = require('express')
const server = express()
server.use(express.static(__dirname + '/public'))
const mongoose = require('mongoose')

// config body parser and UserSchema
const bodyParser = require('body-parser')
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))
const User = require('./public/models/User')

// conecting to the database
const connectDatabase = require('./public/js/db')
connectDatabase()

// routes
// login page (index)
server.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// login verification
server.post('/login-verify', async (req, res) => {
    const verificator = await User.find({
        email: req.body.inpemail,
        password: req.body.inppass
    })
    if (verificator.length == 0) {
        res.sendFile(__dirname + '/create-acc.html')
    } else {
        res.sendFile(__dirname + '/login-verify.html')
    }
})

// create your account page
server.get('/create-acc', (req, res) => {
    res.sendFile(__dirname + '/create-acc.html')
})

// sucess page when creating your account
server.post('/creating-acc', (req, res) => {
    new User({
        email: req.body.creemail,
        password: req.body.crepass
    }).save().then(() => console.log('ACCOUNT CREATED!')).catch((err) => console.log('ERROR: ' + err))
    res.sendFile(__dirname + '/creating-acc.html')
})

// starting the server
server.listen(3000, () => {
    console.log('SERVER RUNNING IN PORT 3000')
})