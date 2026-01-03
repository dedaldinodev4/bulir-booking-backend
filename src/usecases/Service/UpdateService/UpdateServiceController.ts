import { Request, Response } from 'express'
import { UpdateServiceUseCase } from './UpdateServiceUseCase'


export class UpdateServiceController {
  constructor(
    private updateServiceUseCase: UpdateServiceUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { price, name, description  } = request.body;

    try {
      const data = await this.updateServiceUseCase.execute(id, {
        price, name, description
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}