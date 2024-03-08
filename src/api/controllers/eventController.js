const eventService = require('../services/eventService');
const mailService = require('../services/mailService');

const eventController = {
    addEvent : async ( req, res) => {
        try {
        const eventData = req.body;
        await eventService.addEvent(eventData);
        await mailService.sendNewEventEmail(eventData);
        res.status(200).json({eventData});

        } catch ( error){
            console.error('Error creating event: ', error);
            res.status(500).json({error:'Internal Server Error'});
        }
      
    },
};

module.exports = eventController;