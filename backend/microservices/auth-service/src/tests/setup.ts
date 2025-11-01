import mongoose from 'mongoose';
import config from '../config';

export const setupTestDb = async (): Promise<void> => {
  await mongoose.connect(config.db.mongodb.uri, config.db.mongodb.options);
};

export const teardownTestDb = async (): Promise<void> => {
  await mongoose.connection.close();
};
