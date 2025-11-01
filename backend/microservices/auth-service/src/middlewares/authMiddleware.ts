import { Request, Response, NextFunction } from 'express';
import JwtUtils from '../utils/jwtUtils';
import Logger from '../utils/logger';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      res.status(401).json({
        success: false,
        error: 'No token provided',
      });
      return;
    }

    const decoded = JwtUtils.verifyToken(token);
    (req as any).user = decoded;
    next();
  } catch (error) {
    Logger.error(`Auth middleware error: ${error}`);
    res.status(401).json({
      success: false,
      error: 'Invalid token',
    });
  }
};
