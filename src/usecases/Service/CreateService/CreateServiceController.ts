import { Request, Response } from 'express'
import { CreateServiceUseCase } from './CreateServiceUseCase'


export class CreateServiceController {
  constructor(
    private createServiceUseCase: CreateServiceUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { price, description, name, providerId } = request.body;

    try {
      const data = await this.createServiceUseCase.execute({
        price, description, name, providerId
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}