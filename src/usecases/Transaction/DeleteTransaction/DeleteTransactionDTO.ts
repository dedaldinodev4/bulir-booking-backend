import { TransactionStatus, TransactionType } from "@prisma/client";
import Decimal from "decimal.js";

export interface ITransaction {
  id: string;
  bookingId: string | null;
  walletId: string;
  status: TransactionStatus;
  type: TransactionType;
  amount: Decimal;
  created_at: Date;
  updated_at: Date;
}