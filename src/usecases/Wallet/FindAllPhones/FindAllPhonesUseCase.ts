import { 
  IPhoneRepository 
} from "../../../repositories/IPhoneRepository";
import { IResultPaginated } from "./FindAllPhonesDTO";


export class FindAllPhonesUseCase {

  constructor(
    private phoneRepository: IPhoneRepository
  ) { }

  async execute(page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.phoneRepository.findAll(page, perPage);
    return result;
  }
}