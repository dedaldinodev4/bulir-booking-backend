import z, { array } from "zod";


const Booking = z.object({
  id: z.string(),
  serviceId: z.string(),
  providerId: z.string(),
  clientId: z.string(),
  price: z.string(),
  status: z.enum(['CONFIRMED' ,'PENDING' , 'CANCELLED' , 'COMPLETED']),
  created_at: z.string(),
  updated_at: z.string(),
})

const Transaction = z.object({
  id: z.string(),
  walletId: z.string(),
  bookingId: z.string(),
  amount: z.string(),
  status: z.enum(['PAID' ,'FAILED' , 'REFUND' , 'PENDING']),
  type: z.enum(['CREDIT', 'DEBIT']),
  created_at: z.string(),
  updated_at: z.string(),
})

export const Metrics = z.object({
  bookings: array(Booking),
  transactions: array(Transaction),
})

export type IMetrics = z.infer<typeof Metrics>;