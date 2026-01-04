
export interface ISignInRequest {
  data: string;
  password: string;
}

export interface IAuthRequest {
  id: string;
  role: 'ADMIN' | 'CLIENT' | 'PROVIDER'
}

export interface ICurrentUser {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    identify: string;
    role: 'ADMIN' | 'CLIENT' | 'PROVIDER';
  };
  expiresIn: number;
}

export interface IUpdateCredentialsRequest {
  password: string;
}