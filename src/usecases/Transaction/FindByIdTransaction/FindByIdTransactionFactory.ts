import {
  PrismaTransactionRepository
} from '../../../repositories/implementations/prisma/PrismaTransactionRepository'
import { 
  FindByIdTransactionController 
} from './FindByIdTransactionController'
import { 
  FindByIdTransactionUseCase 
} from './FindByIdTransactionUseCase'


export const findByIdTransactionFactory = () => {
  const prismaTransactionRepository = new PrismaTransactionRepository();
  const findByIdTransactionUseCase = new FindByIdTransactionUseCase(
    prismaTransactionRepository
  )
  const findByIdTransactionController = new FindByIdTransactionController(
    findByIdTransactionUseCase
  )

  return findByIdTransactionController
}