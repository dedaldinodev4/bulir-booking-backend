import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { IExpressRequest } from '../dtos/ExpressDTO';
import { env } from '../env';

interface JwtPayload {
  sub: string;
  role: 'CLIENT' | 'PROVIDER' | 'ADMIN';
}

//* ensuredAuthenticated *//
export const ensuredAuthenticated = () => {

  return async (request: IExpressRequest, response: Response, next: NextFunction) => {

    const authHeaders = request.headers.authorization;

    if (!authHeaders) {
      return response.status(401).json({ error: 'Token is missing' });
    }
    const [type, token] = authHeaders.split(' ');

    if (type !== 'Bearer' || !token) {
      return response.status(401).json({ message: 'Invalid token format' });
    }

    try {
      
      const decoded = verify(token, env.JWT_SECRET) as JwtPayload;

      request.user = {
        id: decoded.sub,
        role: decoded.role
      };

      next();
    } catch (err) {
      return response.status(401).json({ message: 'Invalid token'})
    }
  }




}