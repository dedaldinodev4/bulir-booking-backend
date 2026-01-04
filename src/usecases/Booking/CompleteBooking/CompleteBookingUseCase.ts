import { IAuthRequest } from "../../../dtos/Auth";
import { 
  IBookingRepository 
} from "../../../repositories/IBookingRepository";
import { 
  IServiceRepository 
} from "../../../repositories/IServiceRepository";
import {IBooking } from "./CompleteBookingDTO";


export class CompleteBookingUseCase {

  constructor(
    private bookingRepository: IBookingRepository,
    private serviceRepository: IServiceRepository
  ) { }

  async execute(user: IAuthRequest, id: string): Promise<IBooking> {

    const booking = await this.bookingRepository.findById(id);
    
    if (user.role !== 'PROVIDER') {
      throw new Error(`Only provider can complete bookings.`);
    }

    if (!booking) {
      throw new Error("Booking does not exists.");
    }

    if (booking.status !== 'CONFIRMED') {
      throw new Error("Booking needs to be confirmed.");
    }

    const service = await this.serviceRepository.findById(booking.serviceId)
    if (!service) {
      throw new Error("Service does not exists.");
    }
    if (booking.providerId !== service.providerId) {
      throw new Error("Provider doesn't owner in this service.");
    }

    const bookingCompleted = await this.bookingRepository.completed(id) 
    return bookingCompleted;
  }
}