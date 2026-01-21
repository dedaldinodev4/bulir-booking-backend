import { IMetrics } from "../dtos/Metrics";

export interface IMetricsRepository {
  getMetrics(userId: string):Promise<IMetrics>;
  globalMetrics(): Promise<IMetrics>;
}