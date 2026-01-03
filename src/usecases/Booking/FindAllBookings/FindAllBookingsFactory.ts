import {
  PrismaBookingRepository
} from '../../../repositories/implementations/prisma/PrismaBookingRepository'
import { 
  FindAllBookingsController 
} from './FindAllBookingsController'
import { 
  FindAllBookingsUseCase 
} from './FindAllBookingsUseCase'


export const findAllBookingsFactory = () => {
  const prismaBookingRepository = new PrismaBookingRepository();
  const findAllBookingsUseCase = new FindAllBookingsUseCase(
    prismaBookingRepository
  )
  const findAllBookingsController = new FindAllBookingsController(
    findAllBookingsUseCase
  )

  return findAllBookingsController
}