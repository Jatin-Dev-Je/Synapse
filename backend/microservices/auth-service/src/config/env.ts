export default {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3001', 10),
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  jwtExpiry: process.env.JWT_EXPIRY || '24h',
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/auth-service',
  mailServiceApiKey: process.env.MAIL_SERVICE_API_KEY || '',
  logLevel: process.env.LOG_LEVEL || 'info',
};
