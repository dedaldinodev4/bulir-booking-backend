import {
  PrismaMetricsRepository
} from '../../../repositories/implementations/prisma/PrismaMetricsRepository'
import { 
  GetMetricsController 
} from './GetMetricsController'
import { 
  GetMetricsUseCase 
} from './GetMetricsUseCase'


export const getMetricsFactory = () => {
  const prismaMetricsRepository = new PrismaMetricsRepository();
  const getMetricsUseCase = new GetMetricsUseCase(
    prismaMetricsRepository
  )
  const getMetricsController = new GetMetricsController(
    getMetricsUseCase
  )

  return getMetricsController
}