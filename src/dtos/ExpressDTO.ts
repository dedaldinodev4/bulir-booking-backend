import { Request } from "express";
import { IAuthRequest } from "./Auth";

export interface IExpressRequest extends Request{
  user: IAuthRequest;
}