import { IAuthRequest } from "../../../dtos/Auth";
import { 
  IBookingRepository 
} from "../../../repositories/IBookingRepository";
import { BookingTransactionRefundResult } from "./CancelBookingDTO";


export class CancelBookingUseCase {

  constructor(
    private bookingRepository: IBookingRepository
  ) { }

  async execute(user: IAuthRequest, id: string): Promise<BookingTransactionRefundResult> {

    const booking = await this.bookingRepository.findById(id);
    
    if ((user.role !== 'CLIENT') && (user.role !== 'PROVIDER')) {
      throw new Error(`Only client and provider can cancel bookings.`);
    }

    if (!booking) {
      throw new Error("Booking does not exists.");
    }

    if (booking.status !== 'CONFIRMED') {
      throw new Error("Booking needs to be confirmed.");
    }

    const bookingCancelled = await this.bookingRepository.cancelled(id) 
    return bookingCancelled;
  }
}