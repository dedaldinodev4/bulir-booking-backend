import { Request, Response } from 'express'
import { FindAllWalletsUseCase } from './FindAllWalletsUseCase'


export class FindAllWalletsController {
  constructor(
    private findAllWalletsUseCase: FindAllWalletsUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.findAllWalletsUseCase.execute()
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}