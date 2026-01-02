import { 
  ICurrentUser, 
  ISignInRequest, 
  IUpdateCredentialsRequest } from '../dtos/Auth'
import { IUser } from '../dtos/User';

export interface IAuthRepository {
  signIn(data: ISignInRequest): Promise<ICurrentUser| Error>;
  updateCredentials(id:string, data: IUpdateCredentialsRequest): Promise<IUser | Error>;
}