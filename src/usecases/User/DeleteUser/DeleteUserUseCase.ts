import { IUserRepository } from "../../../repositories/IUserRepositoty";


export class DeleteUserUseCase {

  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, user: string): Promise<void | Error> {

    const userExists = await this.userRepository.findById(id);
    const isAdmin = await this.userRepository.findById(user);

    if (!userExists) {
      throw new Error('User does not exists.');
    }
    if (isAdmin?.role !== 'ADMIN' || !isAdmin) {
      throw new Error('User Unauthorized.');
    }
    if (!userExists.status) {
      throw new Error('User is already deleted.');
    }

    const result = await this.userRepository.delete(id, user);
    return result;
  }
}