import {
  PrismaPhoneRepository
} from '../../../repositories/implementations/prisma/PrismaPhoneRepository'
import { UpdatePhoneController } from './UpdatePhoneController'
import { UpdatePhoneUseCase } from './UpdatePhoneUseCase'


export const updatePhoneFactory = () => {
  const prismaPhoneRepository = new PrismaPhoneRepository();
  const updatePhoneUseCase = new UpdatePhoneUseCase(prismaPhoneRepository)
  const updatePhoneController = new UpdatePhoneController(updatePhoneUseCase)

  return updatePhoneController
}