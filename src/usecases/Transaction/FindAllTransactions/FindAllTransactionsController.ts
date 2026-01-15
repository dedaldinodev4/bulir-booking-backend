import { Request, Response } from 'express'
import { FindAllTransactionsUseCase } from './FindAllTransactionsUseCase'
import { TransactionStatus, TransactionType } from '@prisma/client';


export class FindAllTransactionsController {
  constructor(
    private findAllTransactionUseCase: FindAllTransactionsUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const page = parseInt(request.query.page as string);
    const limit = parseInt(request.query.limit as string);
    const order = request.query.order as 'asc' | 'desc';
    const orderBy = request.query.orderBy as string;
    const bookingId = (request.query.bookingId as string);
    const walletId = (request.query.walletId as string);
    const type = (request.query.type as TransactionType);
    const status = (request.query.status as TransactionStatus)
    try {
      const data = await this.findAllTransactionUseCase.execute({
        page, limit, order, bookingId, walletId, type, status, orderBy
      })
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}