const express = require('express');
const mongoose = require('mongoose');
const Message =require('../models/message');
var bodyParser = require('body-parser')
const route = express();
 const mail = require('../mailer');
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
            mail.sendMail("Name: "+ message.name + "\n" + "Email: " + message.email + "\n" + "Subject: " + message.subject + "\n" + "Comments:" + message.comments, "Message");
            res.send(result);
        })
        .catch((err) => 
        console.log(err));

        
})



module.exports = route;