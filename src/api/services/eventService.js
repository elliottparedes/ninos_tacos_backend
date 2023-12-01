const eventRepository = require('../repositories/eventRepository');
const mailer = require('../helpers/mailer');

const eventService = {
    addEvent:async (eventData) => {
      await eventRepository.addEvent(eventData);
    }
}
module.exports = eventService;