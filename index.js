const express = require('express');
const mongoose = require('mongoose');

const Event =require('./models/event');


require("dotenv").config();

const app = express();


const uri =process.env.CONNECTIONSTRING; 
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology:true})
 .then((result) => {console.log('connected to db'); app.listen(process.env.PORT || 3000);})
 .catch((err) => console.log(err));

app.use(express.static('public'));

const cors = require('cors');
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });


var eventRoutes = require("./routes/eventRoutes");
app.use(eventRoutes);
