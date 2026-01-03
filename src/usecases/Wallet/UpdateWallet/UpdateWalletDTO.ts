import Decimal from "decimal.js";

export interface IUpdateWalletRequest {
  balance: Decimal;
}



export interface IUpdateWallet extends IUpdateWalletRequest {
  id: string;
  userId: string;
  created_at: Date;
  updated_at: Date;
}