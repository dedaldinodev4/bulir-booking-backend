import { IAuthRequest } from "../../../dtos/Auth";
import { IUserRepository } from "../../../repositories/IUserRepositoty";
import { IUserMe } from "./UserMeDTO";


export class UserMeUseCase {

  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(user: IAuthRequest): Promise<IUserMe | Error> {

    const { id } = user;
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new Error("User does exists.");
    }
    
    return {
      id,
      role: userExists.role
    }
  }
}