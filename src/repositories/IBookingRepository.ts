import { 
  IBooking, 
  IBookingRequest, 
  IUpdateBookingRequest, 
  type ListBookingsQuery} from "../dtos/Booking";
import { IResultPaginated } from "../dtos/Pagination";

export interface IBookingRepository {
  create(data: IBookingRequest):Promise<IBooking | Error>;
  update(id: string, data: IUpdateBookingRequest): Promise<IBooking| Error>;
  findAll(query: ListBookingsQuery):Promise<IResultPaginated>;
  findById(id: string): Promise<IBooking | null>;
  delete(id: string, user: string): Promise<void>;
}