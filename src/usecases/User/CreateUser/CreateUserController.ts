import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'
import { IExpressRequest } from '../../../dtos/ExpressDTO';


export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) { }

  async handle(request: IExpressRequest, response: Response): Promise<Response> {
    const { name, identify, email, password, role } = request.body;
    const { user } = request;

    try {
      const data = await this.createUserUseCase.execute({
        id: user?.id as string,
        role: user?.role as "CLIENT" | "PROVIDER" | "ADMIN"
      },
      {
        name, identify, email, password, role
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}