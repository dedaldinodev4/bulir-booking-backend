import type { IAuthRequest } from "../../../dtos/Auth";
import { IUserRepository } from "../../../repositories/IUserRepositoty";


export class DeleteUserUseCase {

  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(user: IAuthRequest, id: string): Promise<void | Error> {

    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new Error('User does not exists.');
    }
    
    if (user.role !== 'ADMIN') {
      throw new Error('Access danied.');
    }
 
    const result = await this.userRepository.delete(id);
    return result;
  }
}