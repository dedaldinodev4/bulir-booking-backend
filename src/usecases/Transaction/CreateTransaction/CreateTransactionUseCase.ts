import { 
  ITransactionRepository 
} from "../../../repositories/ITransactionRepository";
import { 
  IWalletRepository 
} from "../../../repositories/IWalletRepository";
import { 
  IBookingRepository 
} from "../../../repositories/IBookingRepository";

import { 
  ICreateTransaction, 
  ICreateTransactionRequest 
} from "./CreateTransactionDTO";
import { IAuthRequest } from "../../../dtos/Auth";


export class CreateTransactionUseCase {

  constructor(
    private transactionRepository: ITransactionRepository,
    private bookingRepository: IBookingRepository,
    private walletRepository: IWalletRepository,
  ) { }

  async execute(user: IAuthRequest, 
    data: ICreateTransactionRequest): Promise<ICreateTransaction | Error> {
    const { walletId, bookingId  } = data;
   
    const [ bookingExist, walletExist ] = await Promise.all([
      this.bookingRepository.findById(bookingId!!),
      this.walletRepository.findById(walletId)
    ])

    if (!bookingExist) {
      throw new Error('Booking does not exist.')
    }

    if (!walletExist) {
      throw new Error('Wallet does not exist.')
    }

    if ((user.role !== 'PROVIDER') && (user.role !== 'CLIENT')) {
      throw new Error('Only providers and clients can create transaction.');
    }
    
    const result = await this.transactionRepository.create(data);
    return result;
  }
}