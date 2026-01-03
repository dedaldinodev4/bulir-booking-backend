import {
  IPhoneRepository
} from "../../../repositories/IPhoneRepository";
import {
  IUpdatePhone,
  IUpdatePhoneRequest
} from "./UpdatePhoneDTO";


export class UpdatePhoneUseCase {

  constructor(
    private phoneRepository: IPhoneRepository
  ) { }

  async execute(id: string, data: IUpdatePhoneRequest): Promise<IUpdatePhone | Error> {
    const phoneExists = await this.phoneRepository.findById(id);

    if (!phoneExists) {
      throw new Error('Phone does not exists.')
    }
    const result = await this.phoneRepository.update(id, data);

    return result;
  }
}