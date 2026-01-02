import Decimal from "decimal.js";
import { IBase } from "./Base";


export interface ITransaction extends IBase, ITransactionRequest { }

export interface ITransactionRequest extends IUpdateTransactionRequest {
  walletId: string;
  bookingId: string;
}

export interface IUpdateTransactionRequest {
  amount: Decimal;
  type:  'CREDIT' | 'DEBIT' 
}
