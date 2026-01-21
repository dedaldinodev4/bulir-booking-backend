import { Response } from 'express'
import { 
  GetMetricsUseCase 
} from './GetMetricsUseCase'
import { IExpressRequest } from '../../../dtos/ExpressDTO';


export class GetMetricsController {
  constructor(
    private getMetricsUseCase: GetMetricsUseCase
  ) { }

  async handle(request: IExpressRequest, response: Response): Promise<Response> {
    try {
      const { user } = request;
      const data = await this.getMetricsUseCase.execute({
        id: user?.id as string,
        role: user?.role as "CLIENT" | "PROVIDER" | "ADMIN"
      })
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}