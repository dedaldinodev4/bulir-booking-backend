import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { IExpressRequest } from '../dtos/ExpressDTO';
import { env } from '../env';

//* ensuredAuthenticated *//
export const ensuredAuthenticated = () => {

  return async (request: IExpressRequest, response: Response, next: NextFunction) => {

    const authHeaders = request.headers.authorization;

    if (!authHeaders) {
      return response.status(401).json({ error: 'Token is missing' });
    }
    const [, token] = authHeaders.split(' ');

    try {
      console.log('Authorization:', request.headers.authorization);
      const data = verify(token, env.JWT_SECRET) as {
        user: {
          email: string;
          name: string;
          identify: string;
          id: string;
          role: 'ADMIN' | 'CLIENT' | 'PROVIDER';
          status: boolean;
        }
      };

      const { user } = data;
      request.user = user
      return next();
    } catch (err) {
      return response.status(401).json({ error: err })
    }
  }




}