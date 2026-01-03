import { 
  IServiceRepository 
} from "../../../repositories/IServiceRepository";
import { IResultPaginated  } from "./FindAllServicesDTO";
import { PaginationQuery } from "../../../dtos/Pagination";

export class FindAllServicesUseCase {

  constructor(
    private serviceRepository: IServiceRepository
  ) { }

  async execute(query: PaginationQuery): Promise<IResultPaginated> {

    const result = await this.serviceRepository.findAll(query);
    return result;
  }
}