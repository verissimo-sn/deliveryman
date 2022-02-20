import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const ensureAuthenticateDeliveryman = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({message: "Token is missing"});
  }

  const [, token] = authorization.split(" ");

  try {
    const { sub } = verify(token, 'secretDeliveryman');

    req.id_deliveryman = sub as string;

    return next()
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}