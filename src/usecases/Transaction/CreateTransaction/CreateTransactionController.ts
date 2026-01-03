import { Request, Response } from 'express'
import { CreateTransactionUseCase } from './CreateTransactionUseCase'


export class CreateTransactionController {
  constructor(
    private createTransactionUseCase: CreateTransactionUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { amount, status, bookingId, walletId, type } = request.body;

    try {
      const data = await this.createTransactionUseCase.execute({
        amount, status, bookingId, walletId, type
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}