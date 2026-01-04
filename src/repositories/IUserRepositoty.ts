import { IUpdateUser, IUserCostum, IUserRequest } from "../dtos/User";


export interface IUserRepository {
  create(data: IUserRequest):Promise<IUserCostum | Error>;
  update(id: string, data: IUpdateUser): Promise<IUserCostum | Error>;
  findAll():Promise<IUserCostum[]>;
  findById(id: string): Promise<IUserCostum | null>;
  findByEmail(email: string): Promise<IUserCostum | null>;
  findByIdentity(email: string): Promise<IUserCostum | null>;
  disable(id: string): Promise<IUserCostum>;
  delete(id: string): Promise<void>;
}