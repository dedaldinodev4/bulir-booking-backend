import { Response } from 'express'
import { 
  GlobalMetricsUseCase 
} from './GlobalMetricsUseCase'
import { IExpressRequest } from '../../../dtos/ExpressDTO';


export class GlobalMetricsController {
  constructor(
    private globalMetricsUseCase: GlobalMetricsUseCase
  ) { }

  async handle(request: IExpressRequest, response: Response): Promise<Response> {
    try {
      const { user } = request;
      const data = await this.globalMetricsUseCase.execute({
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