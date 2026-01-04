import bcrypt from 'bcrypt'
import type { IAuthRequest } from '../dtos/Auth';
import type { IUser } from '../dtos/User';

//* Hashing Password Method *//
export const hashPassword = (password: string): string => {     
  return bcrypt.hashSync(password, 10);
}

export const checkUnEncryptedPasswordIsValid = (unEncryptedPassword: string, password: string): boolean  => {
  return bcrypt.compareSync(unEncryptedPassword, password);
}

export const convertUserLogged = (user: IUser): IAuthRequest => {
  const { id, email, name, role, identify, status } = user;
   const data:IAuthRequest = {
    id, role
   }
   return data;
}