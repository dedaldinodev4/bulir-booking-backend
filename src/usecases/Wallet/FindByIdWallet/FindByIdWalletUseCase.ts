import { 
  IWalletRepository 
} from "../../../repositories/IWalletRepository";
import { IWallet } from "./FindByIdWalletDTO";


export class FindByIdWalletUseCase {

  constructor(
    private walletRepository: IWalletRepository
  ) { }

  async execute(id: string): Promise<IWallet | Error> {

    const wallet = await this.walletRepository.findById(id);
    if (!wallet) {
      throw new Error("Wallet does not exists.");
    }
    return wallet;
  }
}