import redis from 'redis';
import envConfig from '../config/env';
import Logger from '../utils/logger';

const client = redis.createClient({
  url: envConfig.redisUrl,
});

client.on('error', (err) => {
  Logger.error(`Redis client error: ${err}`);
});

client.on('connect', () => {
  Logger.info('Redis client connected');
});

class RedisClient {
  public static async get(key: string): Promise<any> {
    try {
      return await client.get(key);
    } catch (error) {
      Logger.error(`Redis get error: ${error}`);
      throw error;
    }
  }

  public static async set(key: string, value: string, expiresIn?: number): Promise<void> {
    try {
      if (expiresIn) {
        await client.setEx(key, expiresIn, value);
      } else {
        await client.set(key, value);
      }
    } catch (error) {
      Logger.error(`Redis set error: ${error}`);
      throw error;
    }
  }

  public static async del(key: string): Promise<void> {
    try {
      await client.del(key);
    } catch (error) {
      Logger.error(`Redis del error: ${error}`);
      throw error;
    }
  }

  public static async incr(key: string): Promise<number> {
    try {
      return await client.incr(key);
    } catch (error) {
      Logger.error(`Redis incr error: ${error}`);
      throw error;
    }
  }

  public static async expire(key: string, seconds: number): Promise<void> {
    try {
      await client.expire(key, seconds);
    } catch (error) {
      Logger.error(`Redis expire error: ${error}`);
      throw error;
    }
  }
}

export default RedisClient;
