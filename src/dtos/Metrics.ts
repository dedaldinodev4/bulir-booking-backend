import Decimal from "decimal.js";
import z, { array } from "zod";


const Booking = z.object({
  id: z.string(),
  serviceId: z.string(),
  providerId: z.string(),
  clientId: z.string(),
  price: Decimal,
  status: z.enum(['CONFIRMED' ,'PENDING' , 'CANCELLED' , 'COMPLETED']),
  created_at: z.date(),
  updated_at: z.date(),
})

const Transaction = z.object({
  id: z.string(),
  walletId: z.string(),
  bookingId: z.string().nullable(),
  amount: Decimal,
  status: z.enum(['PAID' ,'FAILED' , 'REFUNDED' , 'PENDING']),
  type: z.enum(['CREDIT', 'DEBIT']),
  created_at: z.date(),
  updated_at: z.date(),
})

export const Metrics = z.object({
  bookings: array(Booking),
  transactions: array(Transaction),
})

export type IMetrics = z.infer<typeof Metrics>;