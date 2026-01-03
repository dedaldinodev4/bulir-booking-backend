import { Request, Response } from 'express'
import { DeleteWalletUseCase } from './DeleteWalletUseCase'


export class DeleteWalletController {
  constructor(
    private deleteWalletUseCase: DeleteWalletUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, user } = request.params;

    try {
      const data = await this.deleteWalletUseCase.execute(id, user);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}