
export interface ISignInRequest {
  data: string;
  password: string;
}

export interface IAuthRequest {
  id: string;
  name: string;
  identify: string;
  email: string;
  status: boolean;
}

export interface ICurrentUser {
  token: string;
  user: IAuthRequest;
}

export interface IUpdateCredentialsRequest {
  password: string;
}