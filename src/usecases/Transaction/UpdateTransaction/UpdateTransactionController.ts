import { Request, Response } from 'express'
import { UpdateTransactionUseCase } from './UpdateTransactionUseCase'


export class UpdateTransactionController {
  constructor(
    private updateTransactionUseCase: UpdateTransactionUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { amount, status, type } = request.body;

    try {
      const data = await this.updateTransactionUseCase.execute(id, {
        amount, status, type
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}