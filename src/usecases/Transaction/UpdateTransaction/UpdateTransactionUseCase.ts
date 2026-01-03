import {
  ITransactionRepository
} from "../../../repositories/ITransactionRepository";
import { IUpdateTransaction, IUpdateTransactionRequest } from "./UpdateTransactionDTO";


export class UpdateTransactionUseCase {

  constructor(
    private transactionRepository: ITransactionRepository
  ) { }

  async execute(id: string, data: IUpdateTransactionRequest): Promise<IUpdateTransaction | Error> {
    const transactionExists = await this.transactionRepository.findById(id);

    if (!transactionExists) {
      throw new Error('Transaction does not exists.')
    }
    const result = await this.transactionRepository.update(id, data);
    return result;
  }
}