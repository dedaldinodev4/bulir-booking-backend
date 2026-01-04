import { Request, Response } from 'express'
import { SignUpUseCase } from './SignUpUseCase'


export class SignUpController {
  constructor(
    private signUpUseCase: SignUpUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, identify, role, name , password } = request.body;

    try {
      const result = await this.signUpUseCase.execute({
        email, identify, role, name , password
      });

      return response.status(201).json(result);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}