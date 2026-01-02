import { IBase } from "./Base";

export interface IUserRequest {
  name: string;
  email: string;
  identify: string;
  password: string;
  role: 'ADMIN' | 'CLIENT' | 'PROVIDER'
}

export interface IUser extends IBase, IUserRequest {
  status: boolean;
}

export interface IUpdateUser {
  name: string;
  email: string;
  identify: string;
  status: boolean;
}