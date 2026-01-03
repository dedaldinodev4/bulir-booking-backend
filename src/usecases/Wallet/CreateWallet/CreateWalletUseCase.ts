import { IWalletRepository } from "../../../repositories/IWalletRepository";
import { ICreateWallet, ICreateWalletRequest } from "./CreateWalletDTO";


export class CreateWalletUseCase {

  constructor(
    private walletRepository: IWalletRepository
  ) { }

  async execute(data: ICreateWalletRequest): Promise<ICreateWallet | Error> {
    const result = await this.walletRepository.create(data);
    return result;
  }
}