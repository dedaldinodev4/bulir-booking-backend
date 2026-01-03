import {
  IPhoneRepository
} from "../../../repositories/IPhoneRepository";
import { 
  IUserRepository 
} from "../../../repositories/IUserRepository";


export class DeletePhoneUseCase {

  constructor(
    private phoneRepository: IPhoneRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, user: string): Promise<void | Error> {

    const phoneExists = await this.phoneRepository.findById(id);
    const userExists = await this.userRepository.findById(user);

    if (!phoneExists) {
      throw new Error('Phone does not exists.');
    }
    
    if (!userExists) {
      throw new Error('User does not exists.');
    }
    
    const result = await this.phoneRepository.delete(id, user);

    return result;
  }
}