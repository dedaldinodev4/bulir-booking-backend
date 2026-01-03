import {
  IWalletRepository
} from "../../../repositories/IWalletRepository";
import { 
  IUserRepository 
} from "../../../repositories/IUserRepositoty";


export class DeleteWalletUseCase {

  constructor(
    private walletRepository: IWalletRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, user: string): Promise<void | Error> {

    const WalletExists = await this.walletRepository.findById(id);
    const isAdmin = await this.userRepository.findById(user);

    if (!WalletExists) {
      throw new Error('Wallet does not exists.');
    }
    
    if (isAdmin?.role !== 'ADMIN' || !isAdmin) {
      throw new Error('User Unauthorized.');
    }
    
    const result = await this.walletRepository.delete(id, user);

    return result;
  }
}