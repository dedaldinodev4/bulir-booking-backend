
export interface BookingTransactionRefundResult {
  bookingId: string;
  status: 'CONFIRMED' | "PENDING" | "CANCELLED" | "COMPLETED";
} 