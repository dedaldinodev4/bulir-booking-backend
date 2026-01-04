-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('PENDING', 'PAID', 'FAILED', 'REFUNDED');

-- AlterTable
ALTER TABLE "_transactions" ADD COLUMN     "status" "TransactionStatus" NOT NULL DEFAULT 'PENDING';
