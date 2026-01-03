import {
  PrismaWalletRepository
} from '../../../repositories/implementations/prisma/PrismaWalletRepository'
import { 
  FindAllWalletsController 
} from './FindAllWalletsController'
import { 
  FindAllWalletsUseCase 
} from './FindAllWalletsUseCase'


export const findAllWalletsFactory = () => {
  const prismaWalletRepository = new PrismaWalletRepository();
  const findAllWalletsUseCase = new FindAllWalletsUseCase(
    prismaWalletRepository
  )
  const findAllWalletsController = new FindAllWalletsController(
    findAllWalletsUseCase
  )

  return findAllWalletsController
}