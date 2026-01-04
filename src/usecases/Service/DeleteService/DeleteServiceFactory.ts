import {
  PrismaServiceRepository
} from '../../../repositories/implementations/prisma/PrismaServiceRepository'
import { DeleteServiceController } from './DeleteServiceController'
import { DeleteServiceUseCase } from './DeleteServiceUseCase'


export const deleteServiceFactory = () => {
  const prismaServiceRepository = new PrismaServiceRepository();
  const deleteServiceUseCase = new DeleteServiceUseCase(
    prismaServiceRepository
  )
  const deleteServiceController = new DeleteServiceController(deleteServiceUseCase)

  return deleteServiceController
}