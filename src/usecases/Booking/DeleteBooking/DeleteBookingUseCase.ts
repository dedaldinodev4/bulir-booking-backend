import {
  IBookingRepository
} from "../../../repositories/IBookingRepository";
import { 
  IUserRepository 
} from "../../../repositories/IUserRepositoty";


export class DeleteBookingUseCase {

  constructor(
    private bookingRepository: IBookingRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, user: string): Promise<void | Error> {

    const bookingExists = await this.bookingRepository.findById(id);
    const isAdmin = await this.userRepository.findById(user);

    if (!bookingExists) {
      throw new Error('Booking does not exists.');
    }
    
    if (isAdmin?.role !== 'ADMIN' || !isAdmin) {
      throw new Error('User Unauthorized.');
    }
    
    const result = await this.bookingRepository.delete(id, user);

    return result;
  }
}