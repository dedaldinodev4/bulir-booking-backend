import {
  PrismaPhoneRepository
} from '../../../repositories/implementations/prisma/PrismaPhoneRepository'
import { 
  FindByUserPhoneController 
} from './FindByUserPhoneController'
import { 
  FindByUserPhoneUseCase 
} from './FindByUserPhoneUseCase'


export const findByUserPhoneFactory = () => {
  const prismaPhoneRepository = new PrismaPhoneRepository();
  const findByUserPhoneUseCase = new FindByUserPhoneUseCase(
    prismaPhoneRepository
  )
  const findByUserPhoneController = new FindByUserPhoneController(
    findByUserPhoneUseCase
  )

  return findByUserPhoneController
}