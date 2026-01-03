import { 
  IWalletRepository } 
  from "../../../repositories/IWalletRepository";
import { IWallet } from "./FindByUserWalletDTO";


export class FindByUserWalletUseCase {

  constructor(
    private walletRepository: IWalletRepository
  ) { }

  async execute(id_user: string): Promise<IWallet | Error> {

    const wallet = await this.walletRepository.findByUser(id_user);
    if (!wallet) {
      throw new Error("Wallet does not exists.");
    }
    return wallet;
  }
}