import mongoose from 'mongoose';
import app from './app';
import config from './config';
import Logger from './utils/logger';

const PORT = config.env.port;

const startServer = async (): Promise<void> => {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.db.mongodb.uri, config.db.mongodb.options);
    Logger.info('MongoDB connected successfully');

    // Start server
    app.listen(PORT, () => {
      Logger.info(`Auth service running on port ${PORT}`);
    });
  } catch (error) {
    Logger.error(`Failed to start server: ${error}`);
    process.exit(1);
  }
};

startServer();
