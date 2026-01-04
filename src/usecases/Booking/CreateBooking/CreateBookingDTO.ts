import { BookingStatus } from "@prisma/client";
import Decimal from "decimal.js";


export interface ICreateBooking {
  bookingId: string;
  status: 'CONFIRMED' | "PENDING" | "CANCELLED" | "COMPLETED";
  price: Decimal;
}

export interface ICreateBookingRequest {
  serviceId: string;
  clientId: string;
  providerId: string;
  price: Decimal;
  status: BookingStatus;
}