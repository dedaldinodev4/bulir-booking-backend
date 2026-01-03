import { prisma } from "../../../lib/prisma";
import { 
  ITransactionRequest, 
  ITransaction, 
  ListTransactionsQuery,
  IUpdateTransactionRequest } from "../../../dtos/Transaction";
import { ITransactionRepository } from "../../ITransactionRepository";
import { IResultPaginated } from "../../../dtos/Pagination";

export class PrismaTransactionRepository implements ITransactionRepository {
  private repository = prisma.transaction;

  async findById(id: string): Promise<ITransaction | null> {
    const transaction = await this.repository.findUnique(
      {
        where: { id },
      });
    return transaction;
  }


  async findAll(query: ListTransactionsQuery): Promise<IResultPaginated> {
    const { page, limit, order, status, clientId, providerId, serviceId } = query;

    const skip = (page - 1) * limit;
    const where: any = {
      providerId,
      status,
      clientId,
      serviceId
    };

    //* Dynamic Sort *//
    let orderBy: any = { created_at: 'desc' };
    if (order) {
      const [field, direction] = order.split(':');
      orderBy = { [field]: direction === 'asc' ? 'asc' : 'desc' };
    }

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
        orderBy,
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

  async create(data: ITransactionRequest): Promise<ITransaction> {
    const createTransaction = await this.repository.create({
      data
    })
    return createTransaction;
  }

  async update(id: string, data: IUpdateTransactionRequest): Promise<ITransaction> {
    const TransactionUpdate = await this.repository.update({
      data: data,
      where: {
        id
      }
    })

    return TransactionUpdate;
  }

  async delete(id: string, user: string): Promise<void> {
    await this.repository.delete({
      where: {
        id
      }
    })
  }

}