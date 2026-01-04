import {
  PrismaServiceRepository
} from '../../../repositories/implementations/prisma/PrismaServiceRepository'
import {
  PrismaWalletRepository
} from '../../../repositories/implementations/prisma/PrismaWalletRepository'
import {
  PrismaBookingRepository
} from '../../../repositories/implementations/prisma/PrismaBookingRepository'
import {
  PrismaUserRepository
} from '../../../repositories/implementations/prisma/PrismaUserRepository'
import { CreateBookingController } from './CreateBookingController'
import { CreateBookingUseCase } from './CreateBookingUseCase'


export const createBookingFactory = () => {
  const prismaBookingRepository = new PrismaBookingRepository();
  const prismaServiceRepository = new PrismaServiceRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const prismaWalletRepository = new PrismaWalletRepository();
  const createBookingUseCase = new CreateBookingUseCase(
    prismaBookingRepository,
    prismaServiceRepository,
    prismaUserRepository,
  )
  const createBookingController = new CreateBookingController(
    createBookingUseCase
  )

  return createBookingController
}