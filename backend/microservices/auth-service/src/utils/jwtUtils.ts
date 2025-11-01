import jwt from 'jsonwebtoken';
import envConfig from '../config/env';

class JwtUtils {
  public static generateToken(payload: any, expiresIn: string = envConfig.jwtExpiry): string {
    return jwt.sign(payload, envConfig.jwtSecret, { expiresIn });
  }

  public static generateRefreshToken(payload: any, expiresIn: string = '7d'): string {
    return jwt.sign(payload, envConfig.jwtSecret, { expiresIn });
  }

  public static verifyToken(token: string): any {
    return jwt.verify(token, envConfig.jwtSecret);
  }

  public static verifyRefreshToken(token: string): any {
    return jwt.verify(token, envConfig.jwtSecret);
  }

  public static decodeToken(token: string): any {
    return jwt.decode(token);
  }
}

export default JwtUtils;
