import {
  IBookingRepository
} from "../../../repositories/IBookingRepository";
import {
  IUpdateBooking,
  IUpdateBookingRequest
} from "./UpdateBookingDTO";


export class UpdateBookingUseCase {

  constructor(
    private bookingRepository: IBookingRepository
  ) { }

  async execute(id: string, data: IUpdateBookingRequest): Promise<IUpdateBooking | Error> {
    const bookingExists = await this.bookingRepository.findById(id);

    if (!bookingExists) {
      throw new Error('Booking does not exists.')
    }
    const result = await this.bookingRepository.update(id, data);
    return result;
  }
}