const express = require('express');
const mongoose = require('mongoose');
const Message =require('../models/message');
var bodyParser = require('body-parser')
const route = express();

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
-


route.post('/addMessage', jsonParser,(req,res) => {
    
    const message = new Message({
        name : req.body.name,
        email : req.body.email,
        subject : req.body.subject,
        comments : req.body.comments,
      
    });

    message.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => 
        console.log(err));
})



module.exports = route;