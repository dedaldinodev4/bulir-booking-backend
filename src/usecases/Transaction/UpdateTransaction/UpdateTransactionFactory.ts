import {
  PrismaTransactionRepository
} from '../../../repositories/implementations/prisma/PrismaTransactionRepository'
import { UpdateTransactionController } from './UpdateTransactionController'
import { UpdateTransactionUseCase } from './UpdateTransactionUseCase'


export const updateTransactionFactory = () => {
  const prismaTransactionRepository = new PrismaTransactionRepository();
  const updateTransactionUseCase = new UpdateTransactionUseCase(
    prismaTransactionRepository
  )
  const updateTransactionController = new UpdateTransactionController(
    updateTransactionUseCase
  )

  return updateTransactionController
}