
export interface ISignInRequest {
  data: string;
  password: string;
}

export interface ICurrentUser {
  token: string;
  user: {
    id: string;
    name: string;
    identify: string;
    email: string;
    status: boolean;
    role: 'ADMIN' | 'CLIENT' | 'PROVIDER'
  }
}
