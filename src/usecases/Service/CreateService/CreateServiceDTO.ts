import Decimal from "decimal.js";


export interface ICreateService extends ICreateServiceRequest {
  id: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateServiceRequest {
  name: string;
  description: string;
  price: Decimal;
  providerId: string;
}