import {
  PrismaUserRepository
} from '../../../repositories/implementations/prisma/PrismaUserRepository'
import {
  PrismaAuthRepository
} from '../../../repositories/implementations/prisma/PrismaAuthRepository'
import { UpdateCredentialsController } from './UpdateCredentialsController'
import { UpdateCredentialsUseCase } from './UpdateCredentialsUseCase'


export const updateCredentialsFactory = () => {
  const prismaUserRepository = new PrismaUserRepository();
  const prismaAuthRepository = new PrismaAuthRepository();
  const updateUserCredentialsUseCase = new UpdateCredentialsUseCase(
    prismaAuthRepository, 
    prismaUserRepository
  )
  const updateUserCredentialsController = new UpdateCredentialsController(
    updateUserCredentialsUseCase
  )

  return updateUserCredentialsController
}