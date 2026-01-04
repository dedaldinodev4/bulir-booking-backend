import { 
  ICurrentUser, 
  ISignInRequest, 
  IUpdateCredentialsRequest, 
  ISignUpRequest} from '../dtos/Auth'
import { IUser } from '../dtos/User';

export interface IAuthRepository {
  signIn(data: ISignInRequest): Promise<ICurrentUser| Error>;
  signUp(data: ISignUpRequest): Promise<ICurrentUser| Error>;
  updateCredentials(id:string, data: IUpdateCredentialsRequest): Promise<IUser | Error>;
}