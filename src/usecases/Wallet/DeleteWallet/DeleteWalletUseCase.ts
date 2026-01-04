import { IAuthRequest } from "../../../dtos/Auth";
import {
  IWalletRepository
} from "../../../repositories/IWalletRepository";

export class DeleteWalletUseCase {

  constructor(
    private walletRepository: IWalletRepository,
   
  ) { }

  async execute(user: IAuthRequest, id: string): Promise<void | Error> {

    const WalletExists = await this.walletRepository.findById(id);
    
    if (!WalletExists) {
      throw new Error('Wallet does not exists.');
    }
    
    if (user.role !== 'ADMIN') {
      throw new Error('Access danied.');
    }
    
    const result = await this.walletRepository.delete(id);

    return result;
  }
}