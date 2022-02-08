const express = require('express');
const mongoose = require('mongoose');
const Event =require('../models/event');
var bodyParser = require('body-parser')
const route = express();

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
-


route.post('/addEvent', jsonParser,(req,res) => {
    
    const event = new Event({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        date : req.body.date,
        time : req.body.time,
        people : req.body.people,
        type : req.body.type,
        location : req.body.location,
        hear : req.body.here, 
        comments : req.body.comments
    });

    event.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => 
        console.log(err));
})



module.exports = route;