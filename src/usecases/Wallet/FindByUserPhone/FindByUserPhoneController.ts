import { Request, Response } from 'express'
import { 
  FindByUserPhoneUseCase 
} from './FindByUserPhoneUseCase'


export class FindByUserPhoneController {
  constructor(
    private findByUserPhoneUseCase: FindByUserPhoneUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id_user } = request.params
      const data = await this.findByUserPhoneUseCase.execute(id_user)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}