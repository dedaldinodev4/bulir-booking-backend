import {
  PrismaServiceRepository
} from '../../../repositories/implementations/prisma/PrismaServiceRepository'
import { 
  PrismaUserRepository 
} from '../../../repositories/implementations/prisma/PrismaUserRepository';
import { DeleteServiceController } from './DeleteServiceController'
import { DeleteServiceUseCase } from './DeleteServiceUseCase'


export const deleteServiceFactory = () => {
  const prismaServiceRepository = new PrismaServiceRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const deleteServiceUseCase = new DeleteServiceUseCase(
    prismaServiceRepository,
    prismaUserRepository
  )
  const deleteServiceController = new DeleteServiceController(deleteServiceUseCase)

  return deleteServiceController
}