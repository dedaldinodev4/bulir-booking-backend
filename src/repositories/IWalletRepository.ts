import { 
  IWallet, 
  IWalletRequest, 
  IUpdateWalletRequest } from "../dtos/Wallet";

export interface IWalletRepository {
  create(data: IWalletRequest):Promise<IWallet | Error>;
  update(id: string, data: IUpdateWalletRequest): Promise<IWallet| Error>;
  findAll():Promise<IWallet[]>;
  findById(id: string): Promise<IWallet | null>;
  findByUser(userId: string): Promise<IWallet | null>;
  delete(id: string, user: string): Promise<void>;
}