import { prisma } from "../../../lib/prisma";
import { IUserRequest, IUser, IUpdateUser, IUserCostum } from "../../../dtos/User";
import { IUserRepository } from "../../IUserRepositoty";
import { hashPassword } from "../../../utils/auth";


export class PrismaUserRepository implements IUserRepository {
  private repository = prisma.user;

  async findById(id: string): Promise<IUserCostum | null> {
    const user = await this.repository.findUnique(
      {
        where: { id },
      });
    if (user) {
      const { password, ...userWithoutPassword } = user
      return userWithoutPassword;
    }

    return null;
  }

  async findByEmail(email: string): Promise<IUserCostum | null> {
    const user = await this.repository.findUnique(
      {
        where: { email },
      });
    if (user) {
      const { password, ...userWithoutPassword } = user
      return userWithoutPassword;
    }
    return null;
  }

  async findByIdentity(identify: string): Promise<IUserCostum | null> {
    const user = await this.repository.findUnique(
      {
        where: { identify },
      });
    if (user) {
      const { password, ...userWithoutPassword } = user
      return userWithoutPassword;
    }
    return null;
  }

  async findAll(): Promise<IUserCostum[]> {
    const users = await this.repository.findMany({
      where: { status: true },
      orderBy: { created_at: 'asc' }
    });

    const usersWithoutPassword = users.map(({ password, ...user }) => user);
    return usersWithoutPassword;

  }


  async create(user: IUserRequest): Promise<IUserCostum> {
    const { name, identify, password, email, role } = user;
    const createUser = await this.repository.create({
      data: {
        name,
        identify,
        email,
        role,
        password: hashPassword(password)
      }
    })
    return createUser;
  }


  async update(id: string, user: IUpdateUser): Promise<IUser> {
    const userUpdate = await this.repository.update({
      data: user,
      where: {
        id
      }
    })

    return userUpdate;
  }

  async delete(id: string, user: string): Promise<void> {
    const userDelete = await this.repository.update({
      data: {
        status: false
      },
      where: {
        id
      }
    })
  }

}