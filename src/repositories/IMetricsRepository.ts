import { IMetrics } from "../dtos/Metrics";

export interface IMetricsRepository {
  findAll(userId: string):Promise<IMetrics>;
}