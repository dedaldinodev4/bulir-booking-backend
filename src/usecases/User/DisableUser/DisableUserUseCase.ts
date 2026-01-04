import { IUserRepository } from "../../../repositories/IUserRepositoty";
import { IUser } from "./DisableUserDTO";


export class DisableUserUseCase {

  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(id: string): Promise<IUser> {

    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new Error('User does not exists.');
    }
    
    const result = await this.userRepository.disable(id);
    return result;
  }
}