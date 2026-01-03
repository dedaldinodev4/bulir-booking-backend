import {
  PrismaServiceRepository
} from '../../../repositories/implementations/prisma/PrismaServiceRepository'
import { 
  FindByIdServiceController 
} from './FindByIdServiceController'
import { 
  FindByIdServiceUseCase 
} from './FindByIdServiceUseCase'


export const findByIdServiceFactory = () => {
  const prismaServiceRepository = new PrismaServiceRepository();
  const findByIdServiceUseCase = new FindByIdServiceUseCase(
    prismaServiceRepository
  )
  const findByIdServiceController = new FindByIdServiceController(
    findByIdServiceUseCase
  )

  return findByIdServiceController
}