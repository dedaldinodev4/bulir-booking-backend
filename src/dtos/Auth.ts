
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
  user: IAuthRequest;
}

export interface IUpdateCredentialsRequest {
  password: string;
}