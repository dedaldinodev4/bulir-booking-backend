import jwt from 'jsonwebtoken'
import { prisma } from "../../../lib/prisma";
import {
  ICurrentUser,
  ISignInRequest,
  IAuthRequest, 
  IUpdateCredentialsRequest
} from "../../../dtos/Auth";
import { IAuthRepository } from "../../IAuthRepository";
import { 
  checkUnEncryptedPasswordIsValid, 
  convertUserLogged, 
  hashPassword 
} from '../../../utils/auth';
import { IUser } from '../../../dtos/User';
import { env } from '../../../env';


export class PrismaAuthRepository implements IAuthRepository {
  private repository = prisma.user;


  async signIn(credentials: ISignInRequest): Promise<ICurrentUser | Error> {
    const { data, password } = credentials

    const user = await this.repository.findFirst(
    {
      where: { 
        OR: [
          { email : data },
          { identify: data },
        ],
        status: true
      }
    });

    if (user) {
      if (checkUnEncryptedPasswordIsValid(password, user.password)) {

        const userCurrent: IAuthRequest = convertUserLogged(user)

        const token = jwt.sign(
          { user: userCurrent }, env.JWT_SECRET, { expiresIn: "30d" }
        );

        return {
          user: userCurrent,
          token
        }
      }
    }
    return new Error('User does not exist.');
  }

  async updateCredentials(id: string, credentials: IUpdateCredentialsRequest):
    Promise<IUser | Error> {
    const { password } = credentials;
    const userUpdate = await this.repository.update({
      data: {
        password: hashPassword(password)
      },
      where: {
        id
      }
    })

    return userUpdate;
  }

}