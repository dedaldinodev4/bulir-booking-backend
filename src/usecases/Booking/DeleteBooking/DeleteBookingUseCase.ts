import { IAuthRequest } from "../../../dtos/Auth";
import {
  IBookingRepository
} from "../../../repositories/IBookingRepository";
import { 
  IUserRepository 
} from "../../../repositories/IUserRepositoty";


export class DeleteBookingUseCase {

  constructor(
    private bookingRepository: IBookingRepository
  ) { }

  async execute(user: IAuthRequest, id: string): Promise<void | Error> {

    const bookingExists = await this.bookingRepository.findById(id);

    if (!bookingExists) {
      throw new Error('Booking does not exists.');
    }
    
    if (user.role !== 'ADMIN') {
      throw new Error('Access danied.');
    }
    
    const result = await this.bookingRepository.delete(id);
    return result;
  }
}