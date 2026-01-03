import {
  PrismaBookingRepository
} from '../../../repositories/implementations/prisma/PrismaBookingRepository'
import { 
  FindByIdBookingController 
} from './FindByIdBookingController'
import { 
  FindByIdBookingUseCase 
} from './FindByIdBookingUseCase'


export const findByIdBookingFactory = () => {
  const prismaBookingRepository = new PrismaBookingRepository();
  const findByIdBookingUseCase = new FindByIdBookingUseCase(
    prismaBookingRepository
  )
  const findByIdBookingController = new FindByIdBookingController(
    findByIdBookingUseCase
  )

  return findByIdBookingController
}