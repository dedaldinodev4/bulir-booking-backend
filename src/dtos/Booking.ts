import Decimal from "decimal.js";
import { IBase } from "./Base";
import z from "zod";
import { PaginationQuerySchema } from "./Pagination";
import { BookingStatus } from "@prisma/client";


export interface IBooking extends IBase, IBookingRequest {
  status: BookingStatus
 }

export interface IBookingRequest extends IUpdateBookingRequest {
  serviceId: string;
  clientId: string;
  providerId: string;
  price: Decimal;
}

export interface IUpdateBookingRequest {
  price: Decimal;
  status: BookingStatus;
}


export const BookingStatusEnum = z.enum([
  "PENDING",
  "CONFIRMED",
  "CANCELLED",
  "COMPLETED",
]);

export const ListBookingsQuerySchema = PaginationQuerySchema.extend({
  clientId: z.string().optional(),
  providerId: z.string().optional(),
  serviceId: z.string().optional(),
  status: BookingStatusEnum.optional(),
});
export type ListBookingsQuery = z.infer<typeof ListBookingsQuerySchema>;
