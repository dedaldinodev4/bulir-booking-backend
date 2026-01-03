import {
  ITransactionRepository
} from "../../../repositories/ITransactionRepository";
import { 
  IUserRepository 
} from "../../../repositories/IUserRepositoty";


export class DeleteTransactionUseCase {

  constructor(
    private transactionRepository: ITransactionRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, user: string): Promise<void | Error> {

    const transactionExists = await this.transactionRepository.findById(id);
    const isAdmin = await this.userRepository.findById(user);

    if (!transactionExists) {
      throw new Error('Transaction does not exists.');
    }
    
    if (isAdmin?.role !== 'ADMIN' || !isAdmin) {
      throw new Error('User Unauthorized.');
    }
    
    const result = await this.transactionRepository.delete(id, user);

    return result;
  }
}