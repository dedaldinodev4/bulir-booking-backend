import { Request, Response } from 'express'
import { FindAllServicesUseCase } from './FindAllServicesUseCase'


export class FindAllServicesController {
  constructor(
    private findAllServicesUseCase: FindAllServicesUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const page = parseInt(request.query.page as string);
    const limit = parseInt(request.query.limit as string);
    const order = request.query.order as 'asc' | 'desc';
    try {
      const data = await this.findAllServicesUseCase.execute({page, limit, order})
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}