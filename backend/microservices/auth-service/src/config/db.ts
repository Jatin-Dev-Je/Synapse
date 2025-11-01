import envConfig from './env';

export default {
  mongodb: {
    uri: envConfig.mongoUri,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  redis: {
    url: envConfig.redisUrl,
  },
};
