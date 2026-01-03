import { 
  IServiceRepository 
} from "../../../repositories/IServiceRepository";
import { IService } from "./FindByIdServiceDTO";


export class FindByIdServiceUseCase {

  constructor(
    private serviceRepository: IServiceRepository
  ) { }

  async execute(id: string): Promise<IService | Error> {

    const service = await this.serviceRepository.findById(id);
    if (!service) {
      throw new Error("Service does not exists.");
    }
    return service;
  }
}