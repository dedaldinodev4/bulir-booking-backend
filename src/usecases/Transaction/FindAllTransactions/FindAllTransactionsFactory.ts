import {
  PrismaTransactionRepository
} from '../../../repositories/implementations/prisma/PrismaTransactionRepository'
import { 
  FindAllTransactionsController 
} from './FindAllTransactionsController'
import { 
  FindAllTransactionsUseCase 
} from './FindAllTransactionsUseCase'


export const findAllTransactionsFactory = () => {
  const prismaTransactionRepository = new PrismaTransactionRepository();
  const findAllTransactionsUseCase = new FindAllTransactionsUseCase(
    prismaTransactionRepository
  )
  const findAllTransactionsController = new FindAllTransactionsController(
    findAllTransactionsUseCase
  )

  return findAllTransactionsController
}