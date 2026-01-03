import {
  PrismaWalletRepository
} from '../../../repositories/implementations/prisma/PrismaWalletRepository'
import { 
  PrismaUserRepository 
} from '../../../repositories/implementations/prisma/PrismaUserRepository';
import { DeleteWalletController } from './DeleteWalletController'
import { DeleteWalletUseCase } from './DeleteWalletUseCase'


export const deleteWalletFactory = () => {
  const prismaWalletRepository = new PrismaWalletRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const deleteWalletUseCase = new DeleteWalletUseCase(
    prismaWalletRepository,
    prismaUserRepository
  )
  const deleteWalletController = new DeleteWalletController(deleteWalletUseCase)

  return deleteWalletController
}