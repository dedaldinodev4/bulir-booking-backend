
export interface IUser {
  id: string;
  name: string;
  identify: string;
  email: string;
  status: boolean;
  role: 'ADMIN' | 'CLIENT' | 'PROVIDER'
  created_at: Date;
  updated_at: Date;
}