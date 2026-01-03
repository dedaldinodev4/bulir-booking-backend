import { 
  IBookingRepository 
} from "../../../repositories/IBookingRepository";
import { IResultPaginated  } from "./FindAllBookingsDTO";
import { ListBookingsQuery } from "../../../dtos/Booking";

export class FindAllBookingsUseCase {

  constructor(
    private bookingRepository: IBookingRepository
  ) { }

  async execute(query: ListBookingsQuery): Promise<IResultPaginated> {
    const result = await this.bookingRepository.findAll(query);
    return result;
  }
}