import { Request, Response } from 'express'
import { CreateWalletUseCase } from './CreateWalletUseCase'
import { IExpressRequest } from '../../../dtos/ExpressDTO';


export class CreateWalletController {
  constructor(
    private createWalletUseCase: CreateWalletUseCase
  ) { }

  async handle(request: IExpressRequest, response: Response): Promise<Response> {
    const { balance, userId } = request.body;
    const { user } = request;

    try {
      const data = await this.createWalletUseCase.execute({
        id: user?.id as string,
        role: user?.role as "CLIENT" | "PROVIDER" | "ADMIN"
      },
        {
          balance, userId
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