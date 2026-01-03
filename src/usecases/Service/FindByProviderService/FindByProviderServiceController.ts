import { Request, Response } from 'express'
import { 
  FindByProviderServiceUseCase 
} from './FindByProviderServiceUseCase'


export class FindByProviderServiceController {
  constructor(
    private findByProviderServiceUseCase: FindByProviderServiceUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { providerId } = request.params
      const data = await this.findByProviderServiceUseCase.execute(providerId)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}