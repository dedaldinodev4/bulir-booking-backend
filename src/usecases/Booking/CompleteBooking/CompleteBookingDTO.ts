import { BookingStatus } from "@prisma/client";
import Decimal from "decimal.js";

export interface IBooking {
  id: string;
  serviceId: string;
  clientId: string;
  providerId: string;
  price: Decimal;
  status: BookingStatus;
  created_at: Date;
  updated_at: Date;
}