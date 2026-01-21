import { 
  IMetricsRepository 
} from "../../../repositories/IMetricsRepository";
import { IMetrics } from "../../../dtos/Metrics";
import { IAuthRequest } from "../../../dtos/Auth";


export class GlobalMetricsUseCase {

  constructor(
    private metricsRepository: IMetricsRepository
  ) { }

  async execute(user: IAuthRequest): Promise<IMetrics> {
    const metrics = await this.metricsRepository.globalMetrics();
    return metrics;
  }
}