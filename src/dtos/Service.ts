import Decimal from "decimal.js";
import { IBase } from "./Base";
import z from "zod";


export interface IService extends IBase, IServiceRequest { 
  status: boolean;
}

export interface IServiceRequest extends IUpdateServiceRequest {
  providerId: string;
}

export interface IUpdateServiceRequest {
  name: string;
  description: string;
  price: Decimal;
}
