import { 
  PrismaAuthRepository 
} from '../../../repositories/implementations/prisma/PrismaAuthRepository'
import { SignInController } from './SignInController'
import { SignInUseCase } from './SignInUseCase'


export const signInFactory = () => {
  const prismaAuthRepository = new PrismaAuthRepository();
  const signInUseCase = new SignInUseCase(prismaAuthRepository)
  const signInController = new SignInController(signInUseCase)

  return signInController
}