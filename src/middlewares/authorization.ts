import { NextFunction, Response } from "express";
import { IExpressRequest } from "../dtos/ExpressDTO";
   
type Role = 'CLIENT' | 'PROVIDER' | 'ADMIN';

export function is(...allowedRoles: Role[]) {
  return async (request: IExpressRequest, response: Response, next: NextFunction) => {
    const { user } = request;

    if (!user) {
      return response.status(400).json({ message: "User does not exists"});
    }

    if (!allowedRoles.includes(user.role)) {
      return response.status(403).json({ message: 'Access denied.' });
    }

    return next();
  };
}