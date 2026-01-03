import { Request, Response } from 'express'
import { CreateBookingUseCase } from './CreateBookingUseCase'


export class CreateBookingController {
  constructor(
    private createBookingUseCase: CreateBookingUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { price, status, clientId, serviceId, providerId } = request.body;

    try {
      const data = await this.createBookingUseCase.execute({
        price, status, clientId, serviceId, providerId
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}