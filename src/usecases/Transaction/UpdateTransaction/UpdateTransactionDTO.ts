import { TransactionStatus, TransactionType } from "@prisma/client";
import Decimal from "decimal.js";

export interface IUpdateTransactionRequest {
  amount: Decimal;
  type:  TransactionType;
  status: TransactionStatus;
}



export interface IUpdateTransaction extends IUpdateTransactionRequest {
  id: string;
  walletId: string;
  bookingId: string | null;
  created_at: Date;
  updated_at: Date;
}