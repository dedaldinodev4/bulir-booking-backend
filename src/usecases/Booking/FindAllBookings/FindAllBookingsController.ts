import { Request, Response } from 'express'
import { FindAllBookingsUseCase } from './FindAllBookingsUseCase'
import { BookingStatus } from '@prisma/client';


export class FindAllBookingsController {
  constructor(
    private findAllBookingsUseCase: FindAllBookingsUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const page = parseInt(request.query.page as string);
    const limit = parseInt(request.query.limit as string);
    const order = request.query.order as 'asc' | 'desc';
    const serviceId = (request.query.serviceId as string);
    const providerId = (request.query.providerId as string);
    const clientId = (request.query.clientId as string);
    const status = (request.query.status as BookingStatus)
    try {
      const data = await this.findAllBookingsUseCase.execute({
        page, limit, order, serviceId, providerId, clientId, status
      })
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}