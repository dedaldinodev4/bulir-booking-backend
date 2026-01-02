
export interface IUpdateUserRequest {
  status: boolean;
  email: string;
  name: string;
  identify: string;
}



export interface IUpdateUser extends IUpdateUserRequest {
  id: string;
  role: 'ADMIN' | 'CLIENT' | 'PROVIDER'
  created_at: Date;
  updated_at: Date;
}