import { IAuthRequest } from "../../../dtos/Auth";
import { IUserRepository } from "../../../repositories/IUserRepositoty";
import { ICreateUser, ICreateUserRequest } from "./CreateUserDTO";


export class CreateUserUseCase {

  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(
    user: IAuthRequest, 
    data: ICreateUserRequest): Promise<ICreateUser | Error> {

    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) {
      throw new Error("User already exists.");
    }

    if (user.role !== 'ADMIN') {
      throw new Error('Access danied.');
    }
    
    const result = await this.userRepository.create(data);
    return result;
  }
}