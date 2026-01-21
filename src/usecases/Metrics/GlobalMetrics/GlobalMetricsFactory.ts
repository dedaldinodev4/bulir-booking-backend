import {
  PrismaMetricsRepository
} from '../../../repositories/implementations/prisma/PrismaMetricsRepository'
import { 
  GlobalMetricsController 
} from './GlobalMetricsController'
import { 
  GlobalMetricsUseCase 
} from './GlobalMetricsUseCase'


export const globalMetricsFactory = () => {
  const prismaMetricsRepository = new PrismaMetricsRepository();
  const globalMetricsUseCase = new GlobalMetricsUseCase(
    prismaMetricsRepository
  )
  const globalMetricsController = new GlobalMetricsController(
    globalMetricsUseCase
  )

  return globalMetricsController
}