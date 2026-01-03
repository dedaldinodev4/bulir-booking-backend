import { Request, Response } from 'express'
import { UpdateWalletUseCase } from './UpdateWalletUseCase'


export class UpdateWalletController {
  constructor(
    private updateWalletUseCase: UpdateWalletUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { balance  } = request.body;

    try {
      const data = await this.updateWalletUseCase.execute(id, {
        balance
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}