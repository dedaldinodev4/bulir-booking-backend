import {
  PrismaUserRepository
} from '../../../repositories/implementations/prisma/PrismaUserRepository'
import { UserMeController } from './UserMeController'
import { UserMeUseCase } from './UserMeUseCase'


export const userMeFactory = () => {
  const prismaUserRepository = new PrismaUserRepository();
  const userMeUseCase = new UserMeUseCase(prismaUserRepository)
  const userMeController = new UserMeController(userMeUseCase)

  return userMeController
}