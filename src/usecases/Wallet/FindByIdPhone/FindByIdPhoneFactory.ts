import {
  PrismaPhoneRepository
} from '../../../repositories/implementations/prisma/PrismaPhoneRepository'
import { 
  FindByIdPhoneController 
} from './FindByIdPhoneController'
import { 
  FindByIdPhoneUseCase 
} from './FindByIdPhoneUseCase'


export const findByIdPhoneFactory = () => {
  const prismaPhoneRepository = new PrismaPhoneRepository();
  const findByIdPhoneUseCase = new FindByIdPhoneUseCase(
    prismaPhoneRepository
  )
  const findByIdPhoneController = new FindByIdPhoneController(
    findByIdPhoneUseCase
  )

  return findByIdPhoneController
}