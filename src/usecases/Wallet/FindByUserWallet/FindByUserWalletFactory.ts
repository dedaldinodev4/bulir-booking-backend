import {
  PrismaWalletRepository
} from '../../../repositories/implementations/prisma/PrismaWalletRepository'
import { 
  FindByUserWalletController 
} from './FindByUserWalletController'
import { 
  FindByUserWalletUseCase 
} from './FindByUserWalletUseCase'


export const findByUserWalletFactory = () => {
  const prismaWalletRepository = new PrismaWalletRepository();
  const findByUserWalletUseCase = new FindByUserWalletUseCase(
    prismaWalletRepository
  )
  const findByUserWalletController = new FindByUserWalletController(
    findByUserWalletUseCase
  )

  return findByUserWalletController
}