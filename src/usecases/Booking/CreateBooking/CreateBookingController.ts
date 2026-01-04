import { Request, Response } from 'express'
import { CreateBookingUseCase } from './CreateBookingUseCase'
import { IExpressRequest } from '../../../dtos/ExpressDTO';


export class CreateBookingController {
  constructor(
    private createBookingUseCase: CreateBookingUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    console.log('Chegou no controller');
    const { price, status, clientId, serviceId, providerId } = request.body;

    try {
      const data = await this.createBookingUseCase.execute({
        id: "3982733f-a532-4b75-b780-7186c29e640c",
        name: "",
        email: "",
        identify: "",
        role: "CLIENT",
        status: true
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