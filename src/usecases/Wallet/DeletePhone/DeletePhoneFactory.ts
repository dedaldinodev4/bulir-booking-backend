import {
  PrismaPhoneRepository
} from '../../../repositories/implementations/prisma/PrismaPhoneRepository'
import { 
  PrismaUserRepository 
} from '../../../repositories/implementations/prisma/PrismaUserRepository';
import { DeletePhoneController } from './DeletePhoneController'
import { DeletePhoneUseCase } from './DeletePhoneUseCase'


export const deletePhoneFactory = () => {
  const prismaPhoneRepository = new PrismaPhoneRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const deletePhoneUseCase = new DeletePhoneUseCase(
    prismaPhoneRepository,
    prismaUserRepository
  )
  const deletePhoneController = new DeletePhoneController(deletePhoneUseCase)

  return deletePhoneController
}