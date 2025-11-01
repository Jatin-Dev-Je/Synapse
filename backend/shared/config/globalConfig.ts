export const globalConfig = {
  apiPrefix: '/api',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  environment: process.env.NODE_ENV || 'development',
  logFormat: 'json',
  requestTimeout: 30000,
};
