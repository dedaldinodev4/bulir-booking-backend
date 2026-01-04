import {
  PrismaServiceRepository
} from '../../../repositories/implementations/prisma/PrismaServiceRepository'
import { CreateServiceController } from './CreateServiceController'
import { CreateServiceUseCase } from './CreateServiceUseCase'


export const createServiceFactory = () => {
  const prismaServiceRepository = new PrismaServiceRepository();
  const createServiceUseCase = new CreateServiceUseCase(
    prismaServiceRepository
  )
  
  const createServiceController = new CreateServiceController(
    createServiceUseCase
  )

  return createServiceController
}