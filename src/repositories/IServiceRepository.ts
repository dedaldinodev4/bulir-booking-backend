import { 
  IService, 
  IServiceRequest, 
  IUpdateServiceRequest } from "../dtos/Service";
import { 
  IResultPaginated, 
  PaginationQuery 
} from "../dtos/Pagination";

export interface IServiceRepository {
  create(data: IServiceRequest):Promise<IService | Error>;
  update(id: string, data: IUpdateServiceRequest): Promise<IService| Error>;
  findAll(query: PaginationQuery):Promise<IResultPaginated>;
  findById(id: string): Promise<IService | null>;
  findByProvider(providerId: string): Promise<IService[]>;
  delete(id: string): Promise<void>;
}