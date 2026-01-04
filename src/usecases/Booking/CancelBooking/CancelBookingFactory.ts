import {
  PrismaBookingRepository
} from '../../../repositories/implementations/prisma/PrismaBookingRepository'
import { 
  CancelBookingController 
} from './CancelBookingController'
import { 
  CancelBookingUseCase 
} from './CancelBookingUseCase'


export const cancelBookingFactory = () => {
  const prismaBookingRepository = new PrismaBookingRepository();
  const cancelBookingUseCase = new CancelBookingUseCase(
    prismaBookingRepository
  )
  const cancelBookingController = new CancelBookingController(
    cancelBookingUseCase
  )

  return cancelBookingController
}