import { IAuthRequest } from "../../../dtos/Auth";
import { IWalletRepository } from "../../../repositories/IWalletRepository";
import { ICreateWallet, ICreateWalletRequest } from "./CreateWalletDTO";


export class CreateWalletUseCase {

  constructor(
    private walletRepository: IWalletRepository
  ) { }

  async execute(user: IAuthRequest, data: ICreateWalletRequest): 
  Promise<ICreateWallet | Error> {

    if ((user.role !== 'PROVIDER') && (user.role !== 'CLIENT')) {
      throw new Error('Only providers and clients can create wallet.');
    }
    const result = await this.walletRepository.create(data);
    return result;
  }
}