import { TransactionStatus, TransactionType } from "@prisma/client";
import Decimal from "decimal.js";


export interface ICreateTransaction extends ICreateTransactionRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateTransactionRequest {
  bookingId: string | null;
  walletId: string;
  status: TransactionStatus;
  type: TransactionType;
  amount: Decimal;
}