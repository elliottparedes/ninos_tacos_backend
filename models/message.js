const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    name:{ 
        type: String,
        
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    comments: {
        type: String
    }
   
    
});


// Schema is what defines the structure of the documents that will be added to the database
// A model is what wraps around a schema and commmunicates with the database collection

const Message = mongoose.model("Message",messageSchema);

module.exports = Message;