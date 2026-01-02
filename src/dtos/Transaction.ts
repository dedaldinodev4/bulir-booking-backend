import Decimal from "decimal.js";
import { IBase } from "./Base";


export interface ITransaction extends IBase, ITransactionRequest { 
  type:  'CREDIT' | 'DEBIT' 
}

export interface ITransactionRequest {
  walletId: string;
  bookingId: string;
  amount: Decimal;
}
