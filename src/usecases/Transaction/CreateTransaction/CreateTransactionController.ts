import { Request, Response } from 'express'
import { CreateTransactionUseCase } from './CreateTransactionUseCase'
import { IExpressRequest } from '../../../dtos/ExpressDTO';


export class CreateTransactionController {
  constructor(
    private createTransactionUseCase: CreateTransactionUseCase
  ) { }

  async handle(request: IExpressRequest, response: Response): Promise<Response> {
    const { amount, status, bookingId, walletId, type } = request.body;
    const { user } = request;

    try {
      const data = await this.createTransactionUseCase.execute(
        {
          id: user?.id as string,
          role: user?.role as "CLIENT" | "PROVIDER" | "ADMIN"
        }, {
        amount, status, bookingId, walletId, type
      }
      );

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}