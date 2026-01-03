import {
  PrismaServiceRepository
} from '../../../repositories/implementations/prisma/PrismaServiceRepository'
import { 
  FindAllServicesController 
} from './FindAllServicesController'
import { 
  FindAllServicesUseCase 
} from './FindAllServicesUseCase'


export const findAllServicesFactory = () => {
  const prismaServiceRepository = new PrismaServiceRepository();
  const findAllServicesUseCase = new FindAllServicesUseCase(
    prismaServiceRepository
  )
  const findAllServicesController = new FindAllServicesController(
    findAllServicesUseCase
  )

  return findAllServicesController
}