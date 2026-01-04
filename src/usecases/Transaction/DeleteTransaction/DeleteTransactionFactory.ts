import {
  PrismaTransactionRepository
} from '../../../repositories/implementations/prisma/PrismaTransactionRepository'
import { DeleteTransactionController } from './DeleteTransactionController'
import { DeleteTransactionUseCase } from './DeleteTransactionUseCase'


export const deleteTransactionFactory = () => {
  const prismaTransactionRepository = new PrismaTransactionRepository();
  const deleteTransactionUseCase = new DeleteTransactionUseCase(
    prismaTransactionRepository
  )
  const deleteTransactionController = new DeleteTransactionController(deleteTransactionUseCase)

  return deleteTransactionController
}