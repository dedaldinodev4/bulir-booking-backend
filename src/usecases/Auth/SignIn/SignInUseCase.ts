import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { ISignInRequest } from "./SignInDTO";
import { ICurrentUser } from "./SignInDTO";


export class SignInUseCase {

  constructor(
    private authRepository: IAuthRepository
  ) { }

  async execute(data: ISignInRequest): Promise<ICurrentUser | Error> {

    if (!data) {
      throw new Error('Email or Password invalid.')
    }

    const user = await this.authRepository.signIn(data);
    if (user instanceof Error) {
      throw new Error('Email or Password invalid.')
    }
    return user;
  }
}