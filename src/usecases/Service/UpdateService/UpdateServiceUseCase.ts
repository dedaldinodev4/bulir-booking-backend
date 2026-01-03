import {
  IServiceRepository
} from "../../../repositories/IServiceRepository";
import {
  IUpdateService,
  IUpdateServiceRequest
} from "./UpdateServiceDTO";


export class UpdateServiceUseCase {

  constructor(
    private serviceRepository: IServiceRepository
  ) { }

  async execute(id: string, data: IUpdateServiceRequest): Promise<IUpdateService | Error> {
    const serviceExists = await this.serviceRepository.findById(id);

    if (!serviceExists) {
      throw new Error('Service does not exists.')
    }
    const result = await this.serviceRepository.update(id, data);

    return result;
  }
}