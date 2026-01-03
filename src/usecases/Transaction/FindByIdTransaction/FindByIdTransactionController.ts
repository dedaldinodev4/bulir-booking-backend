import { Request, Response } from 'express'
import { 
  FindByIdTransactionUseCase 
} from './FindByIdTransactionUseCase'


export class FindByIdTransactionController {
  constructor(
    private findByIdTransactionUseCase: FindByIdTransactionUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdTransactionUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}