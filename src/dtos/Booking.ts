import Decimal from "decimal.js";
import { IBase } from "./Base";


export interface IBooking extends IBase, IBookingRequest { }

export interface IBookingRequest extends IUpdateBookingRequest {
  serviceId: string;
  clientId: string;
  providerId: string;
  price: Decimal;
}

export interface IUpdateBookingRequest {
  price: Decimal;
  status:  'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'
}

