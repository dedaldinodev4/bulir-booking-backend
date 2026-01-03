import { Request, Response } from 'express'
import { DeleteTransactionUseCase } from './DeleteTransactionUseCase'


export class DeleteTransactionController {
  constructor(
    private deleteTransactionUseCase: DeleteTransactionUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, user } = request.params;

    try {
      const data = await this.deleteTransactionUseCase.execute(id, user);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}