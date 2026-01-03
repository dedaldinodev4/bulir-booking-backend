import Decimal from "decimal.js";
import { IBase } from "./Base";
import { TransactionType, TransactionStatus } from "@prisma/client";
import z from "zod";
import { PaginationQuerySchema } from "./Pagination";


export interface ITransaction extends IBase, ITransactionRequest { }

export interface ITransactionRequest extends IUpdateTransactionRequest {
  walletId: string;
  bookingId: string | null;
}

export interface IUpdateTransactionRequest {
  amount: Decimal;
  type:  TransactionType;
  status: TransactionStatus;
}

export const TransactionStatusEnum = z.enum([
  "PENDING",
  "PAID",
  "FAILED",
  "REFUNDED",
]);

export const TransactionTypeEnum = z.enum([
  "CREDIT",
  "DEBIT",
])

export const ListTransactionsQuerySchema = PaginationQuerySchema.extend({
  walletId: z.string().optional(),
  bookingId: z.string().optional(),
  status: TransactionStatusEnum.optional(),
  type: TransactionTypeEnum.optional(),
});

export type ListTransactionsQuery = z.infer<typeof ListTransactionsQuerySchema>;
