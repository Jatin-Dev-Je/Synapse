import { Request, Response } from 'express';
import Logger from '../utils/logger';

export abstract class BaseController {
  protected logger: typeof Logger;

  constructor() {
    this.logger = Logger;
  }

  protected successResponse(res: Response, data: any, statusCode = 200): void {
    res.status(statusCode).json({
      success: true,
      data,
    });
  }

  protected errorResponse(res: Response, error: any, statusCode = 500): void {
    this.logger.error(error);
    res.status(statusCode).json({
      success: false,
      error: error.message || 'Internal Server Error',
    });
  }
}
