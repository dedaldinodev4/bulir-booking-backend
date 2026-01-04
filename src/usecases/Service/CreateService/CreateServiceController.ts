import { Request, Response } from 'express'
import { CreateServiceUseCase } from './CreateServiceUseCase'
import { IExpressRequest } from '../../../dtos/ExpressDTO';


export class CreateServiceController {
  constructor(
    private createServiceUseCase: CreateServiceUseCase
  ) { }

  async handle(request: IExpressRequest, response: Response): Promise<Response> {
    const { price, description, name, providerId } = request.body;
    const { user } = request;

    try {
      const data = await this.createServiceUseCase.execute({
        id: user?.id as string,
        role: user?.role as "CLIENT" | "PROVIDER" | "ADMIN"
      },
        {
          price, description, name, providerId
        }
      );

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}