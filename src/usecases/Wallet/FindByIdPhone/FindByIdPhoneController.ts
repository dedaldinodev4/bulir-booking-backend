import { Request, Response } from 'express'
import { 
  FindByIdPhoneUseCase 
} from './FindByIdPhoneUseCase'


export class FindByIdPhoneController {
  constructor(
    private findByIdPhoneUseCase: FindByIdPhoneUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdPhoneUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}