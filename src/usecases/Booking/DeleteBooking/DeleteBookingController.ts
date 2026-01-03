import { Request, Response } from 'express'
import { DeleteBookingUseCase } from './DeleteBookingUseCase'


export class DeleteBookingController {
  constructor(
    private deleteBookingUseCase: DeleteBookingUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, user } = request.params;

    try {
      const data = await this.deleteBookingUseCase.execute(id, user);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}