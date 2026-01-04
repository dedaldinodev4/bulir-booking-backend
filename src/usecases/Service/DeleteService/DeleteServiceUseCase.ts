import { IAuthRequest } from "../../../dtos/Auth";
import {
  IServiceRepository
} from "../../../repositories/IServiceRepository";


export class DeleteServiceUseCase {

  constructor(
    private serviceRepository: IServiceRepository
  ) { }

  async execute(user: IAuthRequest, id: string): Promise<void | Error> {

    const serviceExists = await this.serviceRepository.findById(id);
  
    if (!serviceExists) {
      throw new Error('Service does not exists.');
    }
    
    if (user.role !== 'ADMIN') {
      throw new Error('Access danied.');
    }
    
    const result = await this.serviceRepository.delete(id);
    return result;
  }
}