
export interface IUserMe {
  id: string;
  name: string;
  identify: string;
  email: string;
  role: 'ADMIN' | 'CLIENT' | 'PROVIDER'
}
