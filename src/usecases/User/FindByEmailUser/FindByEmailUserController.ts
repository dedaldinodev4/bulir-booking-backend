import { Request, Response } from 'express'
import { FindByEmailUserUseCase } from './FindByEmailUserUseCase'


export class FindByEmailUserController {
  constructor(
    private findByEmailUserUseCase: FindByEmailUserUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email } = request.params
      const data = await this.findByEmailUserUseCase.execute(email)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}