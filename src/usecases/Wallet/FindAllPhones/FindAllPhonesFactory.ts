import {
  PrismaPhoneRepository
} from '../../../repositories/implementations/prisma/PrismaPhoneRepository'
import { 
  FindAllPhonesController 
} from './FindAllPhonesController'
import { 
  FindAllPhonesUseCase 
} from './FindAllPhonesUseCase'


export const findAllPhonesFactory = () => {
  const prismaPhoneRepository = new PrismaPhoneRepository();
  const findAllPhonesUseCase = new FindAllPhonesUseCase(
    prismaPhoneRepository
  )
  const findAllPhonesController = new FindAllPhonesController(
    findAllPhonesUseCase
  )

  return findAllPhonesController
}