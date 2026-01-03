import { 
  ITransactionRepository 
} from "../../../repositories/ITransactionRepository";
import { IResultPaginated  } from "./FindAllTransactionsDTO";
import { ListTransactionsQuery } from "../../../dtos/Transaction";

export class FindAllTransactionsUseCase {

  constructor(
    private TransactionRepository: ITransactionRepository
  ) { }

  async execute(query: ListTransactionsQuery): Promise<IResultPaginated> {
    const result = await this.TransactionRepository.findAll(query);
    return result;
  }
}