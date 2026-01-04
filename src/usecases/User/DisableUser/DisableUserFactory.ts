import {
  PrismaUserRepository
} from '../../../repositories/implementations/prisma/PrismaUserRepository'
import { DisableUserController } from './DisableUserController'
import { DisableUserUseCase } from './DisableUserUseCase'


export const disableUserFactory = () => {
  const prismaUserRepository = new PrismaUserRepository();
  const disableUserUseCase = new DisableUserUseCase(prismaUserRepository)
  const disableUserController = new DisableUserController(disableUserUseCase)

  return disableUserController
}