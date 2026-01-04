import { IAuthRequest } from "../../../dtos/Auth";
import {
  ITransactionRepository
} from "../../../repositories/ITransactionRepository";


export class DeleteTransactionUseCase {

  constructor(
    private transactionRepository: ITransactionRepository,
  ) { }

  async execute(user: IAuthRequest ,id: string): Promise<void | Error> {

    const transactionExists = await this.transactionRepository.findById(id);

    if (!transactionExists) {
      throw new Error('Transaction does not exists.');
    }
    
    if (user.role !== 'ADMIN') {
      throw new Error('Access danied.');
    }
    
    const result = await this.transactionRepository.delete(id);
    return result;
  }
}