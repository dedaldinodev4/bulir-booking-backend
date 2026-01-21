import { 
  IMetricsRepository 
} from "../../../repositories/IMetricsRepository";
import { IMetrics } from "../../../dtos/Metrics";
import { IAuthRequest } from "../../../dtos/Auth";


export class GetMetricsUseCase {

  constructor(
    private metricsRepository: IMetricsRepository
  ) { }

  async execute(user: IAuthRequest): Promise<IMetrics | Error> {
    const metrics = await this.metricsRepository.findAll(user.id);
    return metrics;
  }
}