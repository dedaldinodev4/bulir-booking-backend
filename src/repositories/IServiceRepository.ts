import { 
  IService, 
  IServiceRequest, 
  IUpdateServiceRequest } from "../dtos/Service";
import { IResultPaginated } from "../dtos/Pagination";

export interface IServiceRepository {
  create(data: IServiceRequest):Promise<IService | Error>;
  update(id: string, data: IUpdateServiceRequest): Promise<IService| Error>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string): Promise<IService | null>;
  findByProvider(providerId: string): Promise<IService[] | null>;
  delete(id: string, user: string): Promise<void>;
}