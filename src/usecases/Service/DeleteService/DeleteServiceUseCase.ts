import {
  IServiceRepository
} from "../../../repositories/IServiceRepository";
import { 
  IUserRepository 
} from "../../../repositories/IUserRepositoty";


export class DeleteServiceUseCase {

  constructor(
    private serviceRepository: IServiceRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, user: string): Promise<void | Error> {

    const serviceExists = await this.serviceRepository.findById(id);
    const isAdmin = await this.userRepository.findById(user);

    if (!serviceExists) {
      throw new Error('Service does not exists.');
    }
    
    if (isAdmin?.role !== 'ADMIN' || !isAdmin) {
      throw new Error('User Unauthorized.');
    }
    
    const result = await this.serviceRepository.delete(id, user);

    return result;
  }
}