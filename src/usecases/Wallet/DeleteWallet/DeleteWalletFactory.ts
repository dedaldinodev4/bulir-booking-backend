import {
  PrismaWalletRepository
} from '../../../repositories/implementations/prisma/PrismaWalletRepository'
import { DeleteWalletController } from './DeleteWalletController'
import { DeleteWalletUseCase } from './DeleteWalletUseCase'


export const deleteWalletFactory = () => {
  const prismaWalletRepository = new PrismaWalletRepository();
  const deleteWalletUseCase = new DeleteWalletUseCase(
    prismaWalletRepository
  )
  const deleteWalletController = new DeleteWalletController(deleteWalletUseCase)

  return deleteWalletController
}