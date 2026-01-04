import { Request } from "express";

export interface IExpressRequest extends Request{
  user?: {
    id: string;
    role: 'CLIENT' | 'PROVIDER' | 'ADMIN';
  }
}