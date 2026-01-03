import { IPhoneRepository } from "../../../repositories/IPhoneRepository";
import { IPhone } from "./FindByUserPhoneDTO";


export class FindByUserPhoneUseCase {

  constructor(
    private phoneRepository: IPhoneRepository
  ) { }

  async execute(id_user: string): Promise<IPhone | Error> {

    const phone = await this.phoneRepository.findByUser(id_user);
    if (!phone) {
      throw new Error("Phone does not exists.");
    }
    return phone;
  }
}