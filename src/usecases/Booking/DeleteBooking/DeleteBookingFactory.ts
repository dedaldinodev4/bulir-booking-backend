import {
  PrismaBookingRepository
} from '../../../repositories/implementations/prisma/PrismaBookingRepository'
import { 
  PrismaUserRepository 
} from '../../../repositories/implementations/prisma/PrismaUserRepository';
import { DeleteBookingController } from './DeleteBookingController'
import { DeleteBookingUseCase } from './DeleteBookingUseCase'


export const deleteBookingFactory = () => {
  const prismaBookingRepository = new PrismaBookingRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const deleteBookingUseCase = new DeleteBookingUseCase(
    prismaBookingRepository,
    prismaUserRepository
  )
  const deleteBookingController = new DeleteBookingController(deleteBookingUseCase)

  return deleteBookingController
}