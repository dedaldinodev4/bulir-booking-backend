import { IUserRepository } from "../../../repositories/IUserRepository";


export class DeleteUserUseCase {

  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, user: string): Promise<void | Error> {

    const userExists = await this.userRepository.findById(id);
    const userDeletedExists = await this.userRepository.findById(user);

    if (!userExists) {
      throw new Error('User does not exists.');
    }
    if (!userDeletedExists) {
      throw new Error('User Deleted does not exists.');
    }
    if (!userExists.status) {
      throw new Error('User is already deactivated.');
    }

    const result = await this.userRepository.delete(id, user);
    return result;
  }
}