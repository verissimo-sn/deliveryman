import { NextFunction, Request, Response } from "express";

export const errorInterceptorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: 'internal server error!'
  });
}