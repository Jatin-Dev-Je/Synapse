import envConfig from '../config/env';

class Logger {
  private static readonly logLevel = envConfig.logLevel;

  private static shouldLog(level: string): boolean {
    const levels: Record<string, number> = {
      error: 0,
      warn: 1,
      info: 2,
      debug: 3,
    };
    return levels[level] <= levels[this.logLevel];
  }

  public static error(message: string): void {
    if (this.shouldLog('error')) {
      console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
    }
  }

  public static warn(message: string): void {
    if (this.shouldLog('warn')) {
      console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
    }
  }

  public static info(message: string): void {
    if (this.shouldLog('info')) {
      console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
    }
  }

  public static debug(message: string): void {
    if (this.shouldLog('debug')) {
      console.log(`[DEBUG] ${new Date().toISOString()} - ${message}`);
    }
  }
}

export default Logger;
