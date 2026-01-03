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
    private userService: IUserRepository,
  ) { }

  async execute(data: ICreateServiceRequest): Promise<ICreateService | Error> {
    const { providerId } = data;
    const user = await this.userService.findById(providerId);

    if (user && user.role !== 'PROVIDER') {
      throw new Error('Only providers can create services');
    }
    const result = await this.serviceRepository.create(data);
    return result;
  }
}