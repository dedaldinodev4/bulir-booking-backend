import { prisma } from "../../../lib/prisma";
import { 
  IServiceRequest, 
  IService, 
  IUpdateServiceRequest } from "../../../dtos/Service";
import { IServiceRepository } from "../../IServiceRepository";
import { IResultPaginated, PaginationQuery } from "../../../dtos/Pagination";

export class PrismaServiceRepository implements IServiceRepository {
  private repository = prisma.service;

  async findById(id: string): Promise<IService | null> {
    const service = await this.repository.findUnique(
      {
        where: { id },
      });
    return service;
  }

  async findByProvider(providerId: string): Promise<IService[]> {
    const services = await this.repository.findMany(
      {
        where: { providerId },
        orderBy: {
          name: "desc"
        }
      });
    return services;
  }

  async findAll(query: PaginationQuery): Promise<IResultPaginated> {
    const { page, limit } = query;

    const skip = (page - 1) * limit;
    const order: "asc" | "desc" = query.order ?? "desc";
    const orderByField = query.orderBy ?? "created_at";
    const where: any = { status: true };

    //* Dynamic Sort *//
    const [items, totalResults] = await Promise.all([
      this.repository.findMany({
        include: {
          provider: {
            select: {
              id: true,
              name: true,
              identify: true,
              email: true,
            }
          },
        },
        skip,
        take: limit,
        where,
        orderBy: [
          { [orderByField]: order },
          { id: "desc" }
        ],
      }),
      this.repository.count({ where }),
    ]);

    const totalPages = Math.ceil(totalResults / limit);
    const totalCurrentResults = items.length;

    return {
      data: items,
      paginator: {
        currentPage: page,
        pages: totalPages,
        nextPage: page < totalPages ? page + 1 : null,
        prevPage: page > 1 ? page - 1 : null,
        perPage: limit,
        totalResults,
        totalCurrentResults,
        lastPage: Math.ceil(totalResults / limit),
      },
    };
  }

  async create(data: IServiceRequest): Promise<IService> {
    const createService = await this.repository.create({
      data
    })
    return createService;
  }

  async update(id: string, data: IUpdateServiceRequest): Promise<IService> {
    const serviceUpdate = await this.repository.update({
      data: data,
      where: {
        id
      }
    })

    return serviceUpdate;
  }

  async delete(id: string): Promise<void> {
    await this.repository.update({
      data: {
        status: false
      },
      where: {
        id
      }
    })
  }

}