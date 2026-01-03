import { Request, Response } from 'express'
import { 
  FindByIdBookingUseCase 
} from './FindByIdBookingUseCase'


export class FindByIdBookingController {
  constructor(
    private findByIdBookingUseCase: FindByIdBookingUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdBookingUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}