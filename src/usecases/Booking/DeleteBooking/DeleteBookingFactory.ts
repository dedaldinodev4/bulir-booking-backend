import {
  PrismaBookingRepository
} from '../../../repositories/implementations/prisma/PrismaBookingRepository'
import { DeleteBookingController } from './DeleteBookingController'
import { DeleteBookingUseCase } from './DeleteBookingUseCase'


export const deleteBookingFactory = () => {
  const prismaBookingRepository = new PrismaBookingRepository();
  const deleteBookingUseCase = new DeleteBookingUseCase(
    prismaBookingRepository
  )
  const deleteBookingController = new DeleteBookingController(deleteBookingUseCase)

  return deleteBookingController
}