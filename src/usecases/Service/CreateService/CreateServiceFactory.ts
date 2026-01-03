import {
  PrismaServiceRepository
} from '../../../repositories/implementations/prisma/PrismaServiceRepository'
import {
  PrismaUserRepository
} from '../../../repositories/implementations/prisma/PrismaUserRepository'
import { CreateServiceController } from './CreateServiceController'
import { CreateServiceUseCase } from './CreateServiceUseCase'


export const createServiceFactory = () => {
  const prismaServiceRepository = new PrismaServiceRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const createServiceUseCase = new CreateServiceUseCase(
    prismaServiceRepository,
    prismaUserRepository
  )
  const createServiceController = new CreateServiceController(
    createServiceUseCase
  )

  return createServiceController
}