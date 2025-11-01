import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import AuthService from '../services/AuthService';

class AuthController extends BaseController {
  private authService: AuthService;

  constructor() {
    super();
    this.authService = new AuthService();
  }

  public async register(req: Request, res: Response): Promise<void> {
    try {
      const { email, password, name } = req.body;
      const result = await this.authService.register(email, password, name);
      this.successResponse(res, result, 201);
    } catch (error) {
      this.errorResponse(res, error, 400);
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const result = await this.authService.login(email, password);
      this.successResponse(res, result);
    } catch (error) {
      this.errorResponse(res, error, 401);
    }
  }

  public async logout(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).user?.id;
      await this.authService.logout(userId);
      this.successResponse(res, { message: 'Logged out successfully' });
    } catch (error) {
      this.errorResponse(res, error);
    }
  }

  public async refresh(req: Request, res: Response): Promise<void> {
    try {
      const refreshToken = req.body.refreshToken;
      const result = await this.authService.refreshToken(refreshToken);
      this.successResponse(res, result);
    } catch (error) {
      this.errorResponse(res, error, 401);
    }
  }
}

export default new AuthController();
