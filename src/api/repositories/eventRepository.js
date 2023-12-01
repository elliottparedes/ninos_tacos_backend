const Event = require('../models/event');

const eventRepository = {
    addEvent: async (eventData) => {
        
        try {
            const event =  new Event(eventData);
            const savedEvent = await event.save();
            await console.log("Event Saved: \n" + JSON.stringify(savedEvent));
            return event;
        } catch (error) {
            throw error;
        }

    },

    getEventById: async (eventId) => {
        try {
            const event = await Event.findById(eventId);
            return event;
          } catch (error) {
            throw error;
          }
    },

}

module.exports = eventRepository;