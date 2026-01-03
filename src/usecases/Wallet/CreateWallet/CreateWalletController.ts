import { Request, Response } from 'express'
import { CreateWalletUseCase } from './CreateWalletUseCase'


export class CreateWalletController {
  constructor(
    private createWalletUseCase: CreateWalletUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { balance, userId } = request.body;

    try {
      const data = await this.createWalletUseCase.execute({
        balance, userId
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}