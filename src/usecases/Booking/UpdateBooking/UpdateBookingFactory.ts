import {
  PrismaBookingRepository
} from '../../../repositories/implementations/prisma/PrismaBookingRepository'
import { UpdateBookingController } from './UpdateBookingController'
import { UpdateBookingUseCase } from './UpdateBookingUseCase'


export const updateBookingFactory = () => {
  const prismaBookingRepository = new PrismaBookingRepository();
  const updateBookingUseCase = new UpdateBookingUseCase(prismaBookingRepository)
  const updateBookingController = new UpdateBookingController(updateBookingUseCase)

  return updateBookingController
}