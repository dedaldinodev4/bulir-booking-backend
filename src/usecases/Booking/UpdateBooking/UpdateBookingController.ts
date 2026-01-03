import { Request, Response } from 'express'
import { UpdateBookingUseCase } from './UpdateBookingUseCase'


export class UpdateBookingController {
  constructor(
    private updateBookingUseCase: UpdateBookingUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { price, status } = request.body;

    try {
      const data = await this.updateBookingUseCase.execute(id, {
        price, status
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}