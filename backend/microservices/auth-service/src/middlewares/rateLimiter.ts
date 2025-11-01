import { Request, Response, NextFunction } from 'express';
import RedisClient from '../integrations/redisClient';
import Logger from '../utils/logger';

const RATE_LIMIT_WINDOW = 60; // seconds
const RATE_LIMIT_MAX_REQUESTS = 100;

export const rateLimiter = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const key = `rate-limit:${req.ip}`;
    const current = await RedisClient.incr(key);

    if (current === 1) {
      await RedisClient.expire(key, RATE_LIMIT_WINDOW);
    }

    res.setHeader('X-RateLimit-Limit', RATE_LIMIT_MAX_REQUESTS);
    res.setHeader('X-RateLimit-Remaining', Math.max(0, RATE_LIMIT_MAX_REQUESTS - current));

    if (current > RATE_LIMIT_MAX_REQUESTS) {
      res.status(429).json({
        success: false,
        error: 'Too many requests',
      });
      return;
    }

    next();
  } catch (error) {
    Logger.error(`Rate limiter error: ${error}`);
    next();
  }
};
