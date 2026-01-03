import { Request, Response } from 'express'
import { DeletePhoneUseCase } from './DeletePhoneUseCase'


export class DeletePhoneController {
  constructor(
    private deletePhoneUseCase: DeletePhoneUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, user } = request.params;

    try {
      const data = await this.deletePhoneUseCase.execute(id, user);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}