import { Request, Response } from 'express'
import { 
  FindByIdServiceUseCase 
} from './FindByIdServiceUseCase'


export class FindByIdServiceController {
  constructor(
    private findByIdServiceUseCase: FindByIdServiceUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdServiceUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}