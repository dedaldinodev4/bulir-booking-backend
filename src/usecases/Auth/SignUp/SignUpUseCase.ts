import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { IUserRepository } from "../../../repositories/IUserRepositoty";
import { ISignUpRequest } from "./SignUpDTO";
import { ICurrentUser } from "./SignUpDTO";


export class SignUpUseCase {

  constructor(
    private authRepository: IAuthRepository,
    private userRepository: IUserRepository,
  ) { }

  async execute(data: ISignUpRequest): Promise<ICurrentUser | Error> {
    const { email, identify } = data;
    
    const [userEmailExist, userIdentifyExist ] = await Promise.all([
      this.userRepository.findByEmail(email),
      this.userRepository.findByIdentity(identify)
    ])
    
    if (userEmailExist && userIdentifyExist) {
      throw new Error('User already exist.')
    }

    const user = await this.authRepository.signUp(data);
    return user;
  }
}