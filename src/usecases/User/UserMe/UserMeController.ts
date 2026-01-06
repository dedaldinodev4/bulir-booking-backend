import { Response } from 'express'
import { UserMeUseCase } from './UserMeUseCase'
import { IExpressRequest } from '../../../dtos/ExpressDTO';


export class UserMeController {
  constructor(
    private userMeUseCase: UserMeUseCase
  ) { }

  async handle(request: IExpressRequest, response: Response): Promise<Response> {
    const { user } = request;

    try {
      const data = await this.userMeUseCase.execute({
        id: user?.id as string,
        role: user?.role as "CLIENT" | "PROVIDER" | "ADMIN"
      });

      return response.status(200).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}