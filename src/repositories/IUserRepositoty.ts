import { IUpdateUser, IUserCostum, IUserRequest } from "../dtos/User";


export interface IUserRepository {
  create(data: IUserRequest):Promise<IUserCostum | Error>;
  update(id: string, data: IUpdateUser): Promise<IUserCostum | Error>;
  findAll(page: number, perPage: number):Promise<IUserCostum[]>;
  findById(id: string): Promise<IUserCostum | null>;
  findByEmail(email: string): Promise<IUserCostum | null>;
  findByIdentity(email: string): Promise<IUserCostum | null>;
  delete(id: string, user: string): Promise<void>;
}