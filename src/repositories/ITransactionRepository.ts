import { 
  ITransaction, 
  ITransactionRequest, 
  IUpdateTransactionRequest } from "../dtos/Transaction";
import { IResultPaginated } from "../dtos/Pagination";

export interface ITransactionRepository {
  create(data: ITransactionRequest):Promise<ITransaction | Error>;
  update(id: string, data: IUpdateTransactionRequest): Promise<ITransaction| Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<ITransaction | null>;
  findByWallet(walletId: string): Promise<IResultPaginated | null>;
  delete(id: string, user: string): Promise<void>;
}