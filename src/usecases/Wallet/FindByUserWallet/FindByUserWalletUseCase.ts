import { 
  IWalletRepository } 
  from "../../../repositories/IWalletRepository";
import { IWallet } from "./FindByUserWalletDTO";


export class FindByUserWalletUseCase {

  constructor(
    private walletRepository: IWalletRepository
  ) { }

  async execute(userId: string): Promise<IWallet | Error> {

    const wallet = await this.walletRepository.findByUser(userId);
    if (!wallet) {
      throw new Error("Wallet does not exists.");
    }
    return wallet;
  }
}