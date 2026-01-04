import { prisma } from "../../../lib/prisma";
import {
  IBookingRequest,
  IBooking,
  ListBookingsQuery,
  IUpdateBookingRequest,
  IBookingWithTransactionRequest,
  BookingTransactionRefundResult,
  BookingTransactionResult,
  BookingCompletedResult
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

  async createWithTransaction(data: IBookingRequest): 
  Promise<BookingTransactionResult> {
    const { clientId, providerId, price, serviceId } = data;

    return prisma.$transaction(async (tx) => {
      //* Wallets *//
      const clientWallet = await tx.wallet.findUnique({
        where: { userId: clientId }
      });

      const providerWallet = await tx.wallet.findUnique({
        where: { userId: providerId }
      });

      if (!clientWallet || !providerWallet) {
        throw new Error('Wallet not found');
      }

      //* Balance verify *//
      if (clientWallet.balance.lt(price)) {
        throw new Error(`Insufficient balance`);
      }

      //* create booking *//
      const booking = await tx.booking.create({
        data: {
          clientId,
          providerId,
          serviceId,
          price: price,
          status: 'CONFIRMED'
        }
      });

      //* create Transaction debit on client *//
      await tx.transaction.create({
        data: {
          walletId: clientWallet.id,
          bookingId: booking.id,
          amount: booking.price,
          type: 'DEBIT',
          status: "PAID"
        }
      });

      //* updated client wallet *//
      await tx.wallet.update({
        where: { id: clientWallet.id },
        data: {
          balance: { decrement: booking.price }
        }
      });

      //* create Transaction CREDIT on provider *//
      await tx.transaction.create({
        data: {
          walletId: providerWallet.id,
          bookingId: booking.id,
          amount: booking.price,
          type: 'CREDIT',
          status: "PAID"
        }
      });

      //* updated provider wallet *//
      await tx.wallet.update({
        where: { id: providerWallet.id },
        data: {
          balance: { increment: booking.price }
        }
      });

      return {
        bookingId: booking.id,
        status: booking.status,
        price: booking.price
      };
    })
  }

  async cancelled(id: string): 
  Promise<BookingTransactionRefundResult> {

    return prisma.$transaction(async (tx) => {

      const booking = await tx.booking.findUnique({
       where: { id } 
      });
      if (!booking) {
        throw new Error('Booking does not exist.')
      }
      const { clientId, providerId } = booking;

      //* Wallets *//
      const clientWallet = await tx.wallet.findUnique({
        where: { userId: clientId }
      });

      const providerWallet = await tx.wallet.findUnique({
        where: { userId: providerId }
      });

      if (!clientWallet || !providerWallet) {
        throw new Error('Wallet not found');
      }
      
      //* Booking cancelled *//
      await tx.booking.update({
        where: { id },
        data: { status: 'CANCELLED' }
      });

      //* Update provider wallet *//
      tx.transaction.create({
        data: {
          walletId: providerWallet.id,
          bookingId: id,
          amount: booking.price,
          type: 'DEBIT',
          status: "REFUNDED"
        }
      });

      //* Update client wallet *//
      tx.transaction.create({
        data: {
          walletId: clientWallet.id,
          bookingId: id,
          amount: booking.price,
          type: 'CREDIT',
          status: "REFUNDED"
        }
      });

      return {
        bookingId: booking.id,
        status: booking.status,
      };
    })
  }

  async completed(id: string): Promise<IBooking> {
    const booking = await this.repository.update({
      where: { id },
      data: { status: 'COMPLETED' }
    });

    return booking;
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

  async delete(id: string): Promise<void> {
    await this.repository.delete({
      where: {
        id
      }
    })
  }

}