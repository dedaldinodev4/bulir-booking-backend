import Decimal from "decimal.js";

export interface IWallet {
  id: string;
  balance: Decimal;
  userId: string;
  created_at: Date;
  updated_at: Date;
}