import {
  PrismaServiceRepository
} from '../../../repositories/implementations/prisma/PrismaServiceRepository'
import { 
  FindByProviderServiceController 
} from './FindByProviderServiceController'
import { 
  FindByProviderServiceUseCase 
} from './FindByProviderServiceUseCase'


export const findByProviderServiceFactory = () => {
  const prismaServiceRepository = new PrismaServiceRepository();
  const findByProviderServiceUseCase = new FindByProviderServiceUseCase(
    prismaServiceRepository
  )
  const findByProviderServiceController = new FindByProviderServiceController(
    findByProviderServiceUseCase
  )

  return findByProviderServiceController
}