import { IUserRepository } from "../../../repositories//IUserRepositoty";
import { IUser } from "./FindByEmailUserDTO";


export class FindByEmailUserUseCase {

  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(email: string): Promise<IUser | Error> {

    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("User does not exists.");
    }
    return user;
  }
}