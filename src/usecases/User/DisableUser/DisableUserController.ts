import { Request, Response } from 'express'
import { DisableUserUseCase } from './DisableUserUseCase'
import { IExpressRequest } from '../../../dtos/ExpressDTO';


export class DisableUserController {
  constructor(
    private disableUserUseCase: DisableUserUseCase
  ) { }

  async handle(request: IExpressRequest, response: Response): Promise<Response> {
    const { id } = request.params;
    const { user } = request;

    try {
      const data = await this.disableUserUseCase.execute(id);
      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}