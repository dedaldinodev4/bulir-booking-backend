import { 
  IBookingRepository 
} from "../../../repositories/IBookingRepository";
import { 
  IServiceRepository 
} from "../../../repositories/IServiceRepository";
import { IUserRepository } from "../../../repositories/IUserRepositoty";
import { 
  ICreateBooking, 
  ICreateBookingRequest 
} from "./CreateBookingDTO";


export class CreateBookingUseCase {

  constructor(
    private bookingRepository: IBookingRepository,
    private serviceRepository: IServiceRepository,
    private userBooking: IUserRepository,
  ) { }

  async execute(data: ICreateBookingRequest): Promise<ICreateBooking | Error> {
    const { clientId, serviceId  } = data;
    const client = await this.userBooking.findById(clientId);
    const serviceExist = await this.serviceRepository.findById(serviceId);
    
    if (client && client.role !== 'CLIENT') {
      throw new Error('Only client can create bookings.');
    }

    if (!serviceExist) {
      throw new Error('Service does not exist.')
    }
    const result = await this.bookingRepository.create(data);
    return result;
  }
}