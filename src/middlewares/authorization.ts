import { NextFunction, Response } from "express";
import { IExpressRequest } from "../dtos/ExpressDTO";
   
export function is(roles: Array<'CLIENT' | 'PROVIDER' | 'ADMIN'>) {
  return async (request: IExpressRequest, response: Response, next: NextFunction) => {
    const { user } = request;

    if (!user) {
      return response.status(400).json({ message: "User does not exists"});
    }

    if (!roles.includes(user.role)) {
      return response.status(403).json({ message: 'Access denied: insufficient role' });
    }

    next();
  };
}