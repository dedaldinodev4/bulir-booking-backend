import {
  PrismaWalletRepository
} from '../../../repositories/implementations/prisma/PrismaWalletRepository'
import { 
  FindByIdWalletController 
} from './FindByIdWalletController'
import { 
  FindByIdWalletUseCase 
} from './FindByIdWalletUseCase'


export const findByIdWalletFactory = () => {
  const prismaWalletRepository = new PrismaWalletRepository();
  const findByIdWalletUseCase = new FindByIdWalletUseCase(
    prismaWalletRepository
  )
  const findByIdWalletController = new FindByIdWalletController(
    findByIdWalletUseCase
  )

  return findByIdWalletController
}