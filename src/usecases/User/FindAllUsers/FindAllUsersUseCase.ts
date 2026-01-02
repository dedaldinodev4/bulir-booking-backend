import { IUserRepository } from "../../../repositories/IUserRepositoty";
import { IUser } from "./FindAllUsersDTO";


export class FindAllUsersUseCase {

  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(): Promise<IUser[]> {
    const result = await this.userRepository.findAll();
    return result;
  }
}