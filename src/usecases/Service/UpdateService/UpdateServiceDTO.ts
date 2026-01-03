import Decimal from "decimal.js";

export interface IUpdateServiceRequest {
  name: string;
  description: string;
  price: Decimal;
}



export interface IUpdateService extends IUpdateServiceRequest {
  id: string;
  providerId: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}