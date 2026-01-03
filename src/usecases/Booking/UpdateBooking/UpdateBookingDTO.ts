import { BookingStatus } from "@prisma/client";
import Decimal from "decimal.js";

export interface IUpdateBookingRequest {
  price: Decimal;
  status: BookingStatus;
}



export interface IUpdateBooking extends IUpdateBookingRequest {
  id: string;
  serviceId: string;
  clientId: string;
  providerId: string;
  created_at: Date;
  updated_at: Date;
}