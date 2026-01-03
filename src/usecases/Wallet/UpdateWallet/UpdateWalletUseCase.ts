import {
  IWalletRepository
} from "../../../repositories/IWalletRepository";
import {
  IUpdateWallet,
  IUpdateWalletRequest
} from "./UpdateWalletDTO";


export class UpdateWalletUseCase {

  constructor(
    private walletRepository: IWalletRepository
  ) { }

  async execute(id: string, data: IUpdateWalletRequest): Promise<IUpdateWallet | Error> {
    const walletExists = await this.walletRepository.findById(id);

    if (!walletExists) {
      throw new Error('Wallet does not exists.')
    }
    const result = await this.walletRepository.update(id, data);

    return result;
  }
}