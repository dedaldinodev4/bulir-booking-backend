import { prisma } from "../../../lib/prisma";
import {
  IBookingRequest,
  IBooking,
  ListBookingsQuery,
  IUpdateBookingRequest
} from "../../../dtos/Booking";
import { IBookingRepository } from "../../IBookingRepository";
import { IResultPaginated } from "../../../dtos/Pagination";

export class PrismaBookingRepository implements IBookingRepository {
  private repository = prisma.booking;

  async findById(id: string): Promise<IBooking | null> {
    const booking = await this.repository.findUnique(
      {
        where: { id },
        include: {
          provider: {
            select: {
              id: true,
              name: true,
              identify: true,
              email: true,
            }
          },
          client: {
            select: {
              id: true,
              name: true,
              identify: true,
              email: true,
            }
          },
          service: {
            select: {
              id: true,
              price: true,
              name: true,
              description: true,
            }
          },
        },

      });
    return booking;
  }


  async findAll(query: ListBookingsQuery): Promise<IResultPaginated> {
    const { page, limit, status, clientId, providerId, serviceId } = query;

    const skip = (page - 1) * limit;
    const order: "asc" | "desc" = query.order ?? "desc";
    const orderByField = query.orderBy ?? "created_at";
    const where: any = {
      providerId,
      status,
      clientId,
      serviceId
    };

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
          client: {
            select: {
              id: true,
              name: true,
              identify: true,
              email: true,
            }
          },
          service: {
            select: {
              id: true,
              price: true,
              name: true,
              description: true,
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

  async create(data: IBookingRequest): Promise<IBooking> {
    const createBooking = await this.repository.create({
      data
    })
    return createBooking;
  }

  async update(id: string, data: IUpdateBookingRequest): Promise<IBooking> {
    const BookingUpdate = await this.repository.update({
      data: data,
      where: {
        id
      }
    })

    return BookingUpdate;
  }

  async delete(id: string, user: string): Promise<void> {
    await this.repository.delete({
      where: {
        id
      }
    })
  }

}