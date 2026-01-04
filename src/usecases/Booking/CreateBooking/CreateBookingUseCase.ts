import { IAuthRequest } from "../../../dtos/Auth";
import { 
  IBookingRepository 
} from "../../../repositories/IBookingRepository";
import { 
  IServiceRepository 
} from "../../../repositories/IServiceRepository";
import { IUserRepository } from "../../../repositories/IUserRepositoty";
import { IWalletRepository } from "../../../repositories/IWalletRepository";
import { 
  ICreateBooking, 
  ICreateBookingRequest 
} from "./CreateBookingDTO";


export class CreateBookingUseCase {

  constructor(
    private bookingRepository: IBookingRepository,
    private serviceRepository: IServiceRepository,
    private userRepository: IUserRepository,
  ) { }

  async execute(user: IAuthRequest, data: ICreateBookingRequest): 
  Promise<ICreateBooking | Error> {
    const { clientId, serviceId, providerId  } = data;
    const client = await this.userRepository.findById(clientId);
    const provider = await this.userRepository.findById(providerId);
    const service = await this.serviceRepository.findById(serviceId);
    
    if (user.role !== 'CLIENT') {
      throw new Error('Only client can create bookings.');
    }

    if (!service) {
      throw new Error('Service does not exist.')
    }

    if (service.providerId === user.id) {
      throw new Error('Client cannot book own service.');
    }

    if (!client) {
      throw new Error('Client does not exist.');
    }

    if (!provider) {
      throw new Error('Client does not exist.');
    }
    
    const result = await this.bookingRepository.createWithTransaction(data);
    return result;
  }
}