import {
  PrismaUserRepository
} from '../../../repositories/implementations/prisma/PrismaUserRepository'
import { FindByEmailUserController } from './FindByEmailUserController'
import { FindByEmailUserUseCase } from './FindByEmailUserUseCase'


export const findByEmailUserFactory = () => {
  const prismaUserRepository = new PrismaUserRepository();
  const findByEmailUserUseCase = new FindByEmailUserUseCase(prismaUserRepository)
  const findByEmailUserController = new FindByEmailUserController(findByEmailUserUseCase)

  return findByEmailUserController
}