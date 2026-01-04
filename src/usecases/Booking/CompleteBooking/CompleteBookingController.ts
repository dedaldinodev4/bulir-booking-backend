import { Request, Response } from 'express'
import {
  CompleteBookingUseCase
} from './CompleteBookingUseCase'
import { IExpressRequest } from '../../../dtos/ExpressDTO';


export class CompleteBookingController {
  constructor(
    private completeBookingUseCase: CompleteBookingUseCase
  ) { }

  async handle(request: IExpressRequest, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const { user } = request;
      const data = await this.completeBookingUseCase.execute({
        id: user?.id as string,
        role: user?.role as "CLIENT" | "PROVIDER" | "ADMIN"
      }, id)
      return response.status(201).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}