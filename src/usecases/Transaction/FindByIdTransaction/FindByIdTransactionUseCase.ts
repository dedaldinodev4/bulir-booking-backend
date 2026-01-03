import { 
  ITransactionRepository 
} from "../../../repositories/ITransactionRepository";
import { ITransaction } from "./FindByIdTransactionDTO";


export class FindByIdTransactionUseCase {

  constructor(
    private transactionRepository: ITransactionRepository
  ) { }

  async execute(id: string): Promise<ITransaction | Error> {

    const transaction = await this.transactionRepository.findById(id);
    if (!transaction) {
      throw new Error("Transaction does not exists.");
    }
    return transaction;
  }
}