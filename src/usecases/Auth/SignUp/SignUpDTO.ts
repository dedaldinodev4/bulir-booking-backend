
export interface ISignUpRequest {
  name: string;
  email: string;
  identify: string;
  password: string;
  role: 'ADMIN' | 'CLIENT' | 'PROVIDER';
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
