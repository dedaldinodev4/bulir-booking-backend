import Decimal from "decimal.js";
import { IBase } from "./Base";


export interface IBooking extends IBase, IBookingRequest { 
  status:  'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'
}

export interface IBookingRequest {
  serviceId: string;
  clientId: string;
  providerId: string;
  price: Decimal;
}
