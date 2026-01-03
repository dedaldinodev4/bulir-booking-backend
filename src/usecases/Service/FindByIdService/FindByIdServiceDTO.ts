import Decimal from "decimal.js";

export interface IService {
  id: string;
  name: string;
  description: string;
  price: Decimal;
  providerId: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}