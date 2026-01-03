import { IPhoneRepository } from "../../../repositories/IPhoneRepository";
import { IPhone } from "./FindByIdPhoneDTO";


export class FindByIdPhoneUseCase {

  constructor(
    private phoneRepository: IPhoneRepository
  ) { }

  async execute(id: string): Promise<IPhone | Error> {

    const phone = await this.phoneRepository.findById(id);
    if (!phone) {
      throw new Error("Phone does not exists.");
    }
    return phone;
  }
}