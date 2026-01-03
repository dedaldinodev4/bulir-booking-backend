import { Request, Response } from 'express'
import { UpdatePhoneUseCase } from './UpdatePhoneUseCase'


export class UpdatePhoneController {
  constructor(
    private updatePhoneUseCase: UpdatePhoneUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { number, id_user  } = request.body;

    try {
      const data = await this.updatePhoneUseCase.execute(id, {
        number, id_user
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}