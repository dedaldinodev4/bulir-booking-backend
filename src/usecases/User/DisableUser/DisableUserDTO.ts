
export interface IUser {
  id: string;
  name: string;
  identify: string;
  email: string;
  role: 'ADMIN' | 'CLIENT' | 'PROVIDER';
  status: boolean;
  created_at: Date;
  updated_at: Date;
}