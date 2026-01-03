import {
  PrismaWalletRepository
} from '../../../repositories/implementations/prisma/PrismaWalletRepository'
import { CreateWalletController } from './CreateWalletController'
import { CreateWalletUseCase } from './CreateWalletUseCase'


export const createWalletFactory = () => {
  const prismaWalletRepository = new PrismaWalletRepository();
  const createWalletUseCase = new CreateWalletUseCase(
    prismaWalletRepository
  )
  const createWalletController = new CreateWalletController(
    createWalletUseCase
  )

  return createWalletController
}