import Decimal from "decimal.js";
import { IBase } from "./Base";


export interface IService extends IBase, IServiceRequest { 
  status: boolean;
}

export interface IServiceRequest {
  name: string;
  description: string;
  price: Decimal;
  providerId: string;
}
