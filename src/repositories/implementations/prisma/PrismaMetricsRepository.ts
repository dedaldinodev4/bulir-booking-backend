import { prisma } from "../../../lib/prisma";
import { IMetrics } from "../../../dtos/Metrics";
import { IMetricsRepository } from "../../IMetricsRepository";


export class PrismaMetricsRepository implements IMetricsRepository {
  private repository = prisma;

  async getMetrics(userId: string): Promise<IMetrics> {
    
    const [bookings, transactions] = await Promise.all([
      this.repository.booking.findMany({
        where: {
          OR: [
            { clientId: userId},
            { providerId: userId }
          ]
        }
      }),
      this.repository.transaction.findMany({
        where: {
          wallet : {
            userId
          }
        }
      }),
    ]);

    return {
      bookings,
      transactions
    };
  }

  async globalMetrics(): Promise<IMetrics> {
    const [bookings, transactions] = await Promise.all([
      this.repository.booking.findMany({}),
      this.repository.transaction.findMany({}),
    ]);

    return {
      bookings,
      transactions
    };
  }


}