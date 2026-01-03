import Decimal from "decimal.js";


export interface ICreateWallet extends ICreateWalletRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateWalletRequest {
  balance: Decimal;
  userId: string;
}