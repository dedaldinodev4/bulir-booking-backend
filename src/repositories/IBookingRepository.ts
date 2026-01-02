import { 
  IBooking, 
  IBookingRequest, 
  IUpdateBookingRequest } from "../dtos/Booking";
import { IResultPaginated } from "../dtos/Pagination";

export interface IBookingRepository {
  create(data: IBookingRequest):Promise<IBooking | Error>;
  update(id: string, data: IUpdateBookingRequest): Promise<IBooking| Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<IBooking | null>;
  findByProvider(providerId: string): Promise<IBooking[] | null>;
  findByClient(clientId: string): Promise<IBooking[] | null>;
  delete(id: string, user: string): Promise<void>;
}