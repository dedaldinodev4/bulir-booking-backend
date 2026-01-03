import {
  PrismaServiceRepository
} from '../../../repositories/implementations/prisma/PrismaServiceRepository'
import { UpdateServiceController } from './UpdateServiceController'
import { UpdateServiceUseCase } from './UpdateServiceUseCase'


export const updateServiceFactory = () => {
  const prismaServiceRepository = new PrismaServiceRepository();
  const updateServiceUseCase = new UpdateServiceUseCase(prismaServiceRepository)
  const updateServiceController = new UpdateServiceController(updateServiceUseCase)

  return updateServiceController
}