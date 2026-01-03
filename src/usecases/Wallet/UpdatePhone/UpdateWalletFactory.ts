import {
  PrismaWalletRepository
} from '../../../repositories/implementations/prisma/PrismaWalletRepository'
import { UpdateWalletController } from './UpdateWalletController'
import { UpdateWalletUseCase } from './UpdateWalletUseCase'


export const updateWalletFactory = () => {
  const prismaWalletRepository = new PrismaWalletRepository();
  const updateWalletUseCase = new UpdateWalletUseCase(prismaWalletRepository)
  const updateWalletController = new UpdateWalletController(updateWalletUseCase)

  return updateWalletController
}