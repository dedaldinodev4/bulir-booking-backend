import { BookingStatus } from "@prisma/client";
import Decimal from "decimal.js";


export interface ICreateBooking extends ICreateBookingRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateBookingRequest {
  serviceId: string;
  clientId: string;
  providerId: string;
  price: Decimal;
  status: BookingStatus;
}