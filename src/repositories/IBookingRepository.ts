import { IAuthRequest } from "../dtos/Auth";
import { 
  IBooking, 
  IBookingRequest, 
  IUpdateBookingRequest, 
  ListBookingsQuery,
  BookingTransactionResult} from "../dtos/Booking";
import { IResultPaginated } from "../dtos/Pagination";

export interface IBookingRepository {
  create(data: IBookingRequest):Promise<IBooking>;
  createWithTransaction(data: IBookingRequest):Promise<BookingTransactionResult>;
  update(id: string, data: IUpdateBookingRequest): Promise<IBooking>;
  findAll(query: ListBookingsQuery):Promise<IResultPaginated>;
  findById(id: string): Promise<IBooking | null>;
  delete(id: string): Promise<void>;
}