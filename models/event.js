const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name:{ 
        type: String,
        
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    people: {
        type : String
    },
    type: {
        type: String
    },
    location: {
        type: String
    },
    hear : {
        type: String
    },
    comments : {
        type: String
    }
});


// Schema is what defines the structure of the documents that will be added to the database
// A model is what wraps around a schema and commmunicates with the database collection

const Event = mongoose.model("Event",eventSchema);

module.exports = Event;