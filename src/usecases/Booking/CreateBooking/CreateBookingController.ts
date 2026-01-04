import { Request, Response } from 'express'
import { CreateBookingUseCase } from './CreateBookingUseCase'
import { IExpressRequest } from '../../../dtos/ExpressDTO';


export class CreateBookingController {
  constructor(
    private createBookingUseCase: CreateBookingUseCase
  ) { }

  async handle(request: IExpressRequest, response: Response): Promise<Response> {
    const { price, status, clientId, serviceId, providerId } = request.body;
    const user = request.user;

    try {
      const data = await this.createBookingUseCase.execute({
        id: user?.id as string,
        role: user?.role as "CLIENT" | "PROVIDER" | "ADMIN"
      }, {
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