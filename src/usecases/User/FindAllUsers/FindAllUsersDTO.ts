
export interface IUser {
  id: string;
  status: boolean;
  name: string;
  identify: string;
  email: string;
  role: 'ADMIN' | 'CLIENT' | 'PROVIDER'
  created_at: Date;
  updated_at: Date;
}