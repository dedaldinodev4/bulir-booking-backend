import { 
  IServiceRepository } 
  from "../../../repositories/IServiceRepository";
import { IService } from "./FindByProviderServiceDTO";


export class FindByProviderServiceUseCase {

  constructor(
    private serviceRepository: IServiceRepository
  ) { }

  async execute(providerId: string): Promise<IService[]> {

    const service = await this.serviceRepository.findByProvider(providerId);
    if (!service) {
      throw new Error("Service does not exists.");
    }
    return service;
  }
}