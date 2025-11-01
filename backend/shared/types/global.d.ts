declare global {
  interface CustomError extends Error {
    statusCode?: number;
    details?: any;
  }

  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
      };
    }
  }
}

export {};
