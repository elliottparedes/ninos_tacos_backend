const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const statusCheckRoutes = require('../routes/statusCheckRoutes');
const eventRoutes = require('../routes/eventRoutes');
const messageRoutes = require('../routes/messageRoutes');
const loggerMiddleware = require('../middlewares/loggerMiddleware');
const corsMiddleware = require('../middlewares/corsMiddleware');
const corsOptions = require('../config/corsOptions');

const serverConnection = {
  start: async () => {
    try {
      const app = express();

      // Static files middleware
      app.use(express.static('public'));

      // Body parser middleware
      app.use(bodyParser.json());
  
      // configuring Cross Origin Request Sharing
      app.use(corsMiddleware);
      app.use(cors(corsOptions));

      // Logger middleware
      app.use(loggerMiddleware);
      
      // Routes
      app.use(eventRoutes);
      app.use(messageRoutes);
      app.use(statusCheckRoutes);

      // Start the server
      app.listen(process.env.PORT || 3000);
      console.info(`Node.js Express listening on port: ${process.env.PORT || 3000}`);

    } catch (error) {
      console.error('Error starting the server:', error);
      throw error; 
    }
  },
};

module.exports = serverConnection;
