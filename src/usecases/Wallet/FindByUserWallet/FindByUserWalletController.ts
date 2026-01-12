import { Request, Response } from 'express'
import { 
  FindByUserWalletUseCase 
} from './FindByUserWalletUseCase'


export class FindByUserWalletController {
  constructor(
    private findByUserWalletUseCase: FindByUserWalletUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { userId } = request.params
      const data = await this.findByUserWalletUseCase.execute(userId)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}