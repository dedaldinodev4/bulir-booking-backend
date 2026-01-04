import { Request, Response } from 'express'
import { DeleteServiceUseCase } from './DeleteServiceUseCase'
import { IExpressRequest } from '../../../dtos/ExpressDTO';


export class DeleteServiceController {
  constructor(
    private deleteServiceUseCase: DeleteServiceUseCase
  ) { }

  async handle(request: IExpressRequest, response: Response): Promise<Response> {
    const { id } = request.params;
    const { user } = request;

    try {
      const data = await this.deleteServiceUseCase.execute({
        id: user?.id as string,
        role: user?.role as "CLIENT" | "PROVIDER" | "ADMIN"
      }, id);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}