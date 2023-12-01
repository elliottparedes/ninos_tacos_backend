const messageService = require('../services/messageService');
const mailService = require('../services/mailService');

const messageController = {
    addMessage : async ( req, res) => {
        try {
        const messageData = req.body;
        await messageService.addMessage(messageData);
        await mailService.sendMessageEmail(messageData);
        res.status(200).json({messageData});

        } catch ( error){
            console.error('Error creating message: ', error);
            res.status(500).json({error:'Internal Server Error'});

        }
      
    },
};

module.exports = messageController;