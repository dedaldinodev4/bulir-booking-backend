import { Request, Response } from 'express'
import { 
  FindByIdWalletUseCase 
} from './FindByIdWalletUseCase'


export class FindByIdWalletController {
  constructor(
    private findByIdWalletUseCase: FindByIdWalletUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdWalletUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}