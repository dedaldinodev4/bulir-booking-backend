import { 
  PrismaAuthRepository 
} from '../../../repositories/implementations/prisma/PrismaAuthRepository'
import { 
  PrismaUserRepository 
} from '../../../repositories/implementations/prisma/PrismaUserRepository'
import { SignUpController } from './SignUpController'
import { SignUpUseCase } from './SignUpUseCase'


export const signUpFactory = () => {
  const prismaAuthRepository = new PrismaAuthRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const signUpUseCase = new SignUpUseCase(
    prismaAuthRepository,
    prismaUserRepository
  )
  const signUpController = new SignUpController(signUpUseCase)

  return signUpController
}