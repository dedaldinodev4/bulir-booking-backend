import { Request, Response } from 'express'
import { SignInUseCase } from './SignInUseCase'


export class SignInController {
  constructor(
    private signInUseCase: SignInUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { data, password } = request.body;

    try {
      const result = await this.signInUseCase.execute({
        data, password
      });

      return response.status(201).json(result);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}