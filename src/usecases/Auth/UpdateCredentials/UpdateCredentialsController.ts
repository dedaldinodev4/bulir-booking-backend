import { Request, Response } from 'express'
import { UpdateCredentialsUseCase } from './UpdateCredentialsUseCase'


export class UpdateCredentialsController {
  constructor(
    private updateCredentialsUseCase: UpdateCredentialsUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { username, password } = request.body;

    try {
      const data = await this.updateCredentialsUseCase.execute(id, {
        username, password
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}