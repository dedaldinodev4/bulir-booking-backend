import { IAuthRequest } from "../../../dtos/Auth";
import { 
  IServiceRepository 
} from "../../../repositories/IServiceRepository";
import { IUserRepository } from "../../../repositories/IUserRepositoty";
import { 
  ICreateService, 
  ICreateServiceRequest 
} from "./CreateServiceDTO";


export class CreateServiceUseCase {

  constructor(
    private serviceRepository: IServiceRepository,
  ) { }

  async execute(user: IAuthRequest, data: ICreateServiceRequest): 
  Promise<ICreateService | Error> {
   
    if (user.role !== 'PROVIDER') {
      throw new Error('Only providers can create services.');
    }
    const result = await this.serviceRepository.create(data);
    return result;
  }
}