import { 
  ITransaction, 
  ITransactionRequest, 
  IUpdateTransactionRequest, 
  ListTransactionsQuery } from "../dtos/Transaction";
import { IResultPaginated } from "../dtos/Pagination";

export interface ITransactionRepository {
  create(data: ITransactionRequest):Promise<ITransaction | Error>;
  update(id: string, data: IUpdateTransactionRequest): Promise<ITransaction| Error>;
  findAll(query: ListTransactionsQuery):Promise<IResultPaginated>;
  findById(id: string): Promise<ITransaction | null>;
  delete(id: string, user: string): Promise<void>;
}