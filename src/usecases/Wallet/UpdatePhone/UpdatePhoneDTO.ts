
export interface IUpdatePhoneRequest {
  number: string;
  id_user: string;
}



export interface IUpdatePhone extends IUpdatePhoneRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}