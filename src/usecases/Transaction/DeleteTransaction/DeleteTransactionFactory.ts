import {
  PrismaTransactionRepository
} from '../../../repositories/implementations/prisma/PrismaTransactionRepository'
import { 
  PrismaUserRepository 
} from '../../../repositories/implementations/prisma/PrismaUserRepository';
import { DeleteTransactionController } from './DeleteTransactionController'
import { DeleteTransactionUseCase } from './DeleteTransactionUseCase'


export const deleteTransactionFactory = () => {
  const prismaTransactionRepository = new PrismaTransactionRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const deleteTransactionUseCase = new DeleteTransactionUseCase(
    prismaTransactionRepository,
    prismaUserRepository
  )
  const deleteTransactionController = new DeleteTransactionController(deleteTransactionUseCase)

  return deleteTransactionController
}