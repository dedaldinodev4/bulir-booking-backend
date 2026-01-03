

export interface IUpdateUserCredentialsRequest {
  data: string;
  password: string;
}



export interface IUpdateUserCredentials {
  id: string;
  name: string;
  identify: string;
  email: string;
  status: boolean;
  role: 'ADMIN' | 'CLIENT' | 'PROVIDER'
  created_at: Date;
  updated_at: Date;
}