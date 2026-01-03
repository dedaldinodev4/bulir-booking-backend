import {
  PrismaWalletRepository
} from '../../../repositories/implementations/prisma/PrismaWalletRepository'
import {
  PrismaTransactionRepository
} from '../../../repositories/implementations/prisma/PrismaTransactionRepository'
import {
  PrismaBookingRepository
} from '../../../repositories/implementations/prisma/PrismaBookingRepository'
import { CreateTransactionController } from './CreateTransactionController'
import { CreateTransactionUseCase } from './CreateTransactionUseCase'


export const createTransactionFactory = () => {
  const prismaTransactionRepository = new PrismaTransactionRepository();
  const prismaBookingRepository = new PrismaBookingRepository();
  const prismaWalletRepository = new PrismaWalletRepository();
  const createTransactionUseCase = new CreateTransactionUseCase(
    prismaTransactionRepository,
    prismaBookingRepository,
    prismaWalletRepository
  )
  const createTransactionController = new CreateTransactionController(
    createTransactionUseCase
  )

  return createTransactionController
}