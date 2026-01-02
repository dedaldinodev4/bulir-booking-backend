
export interface ICreateUser {
  id: string;
  name: string;
  identify: string;
  email: string;
  role: 'ADMIN' | 'CLIENT' | 'PROVIDER';
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateUserRequest {
  name: string;
  identify: string;
  password: string;
  email: string;
  role: 'ADMIN' | 'CLIENT' | 'PROVIDER';
}