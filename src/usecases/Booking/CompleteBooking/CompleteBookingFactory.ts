import {
  PrismaBookingRepository
} from '../../../repositories/implementations/prisma/PrismaBookingRepository'
import {
  PrismaServiceRepository
} from '../../../repositories/implementations/prisma/PrismaServiceRepository'
import { 
  CompleteBookingController 
} from './CompleteBookingController'
import { 
  CompleteBookingUseCase 
} from './CompleteBookingUseCase'


export const completeBookingFactory = () => {
  const prismaBookingRepository = new PrismaBookingRepository();
  const prismaServiceRepository = new PrismaServiceRepository();
  const completeBookingUseCase = new CompleteBookingUseCase(
    prismaBookingRepository,
    prismaServiceRepository
  )
  const completeBookingController = new CompleteBookingController(
    completeBookingUseCase
  )

  return completeBookingController
}