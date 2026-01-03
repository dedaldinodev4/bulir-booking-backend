import { 
  IBookingRepository 
} from "../../../repositories/IBookingRepository";
import { IBooking } from "./FindByIdBookingDTO";


export class FindByIdBookingUseCase {

  constructor(
    private bookingRepository: IBookingRepository
  ) { }

  async execute(id: string): Promise<IBooking | Error> {

    const booking = await this.bookingRepository.findById(id);
    if (!booking) {
      throw new Error("Booking does not exists.");
    }
    return booking;
  }
}