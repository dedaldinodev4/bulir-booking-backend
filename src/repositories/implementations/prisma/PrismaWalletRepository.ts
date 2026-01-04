import { prisma } from "../../../lib/prisma";
import { 
  IWalletRequest, 
  IWallet, 
  IUpdateWalletRequest } from "../../../dtos/Wallet";
import { IWalletRepository } from "../../IWalletRepository";

export class PrismaWalletRepository implements IWalletRepository {
  private repository = prisma.wallet;

  async findById(id: string): Promise<IWallet | null> {
    const wallet = await this.repository.findUnique(
      {
        where: { id },
      });
    return wallet;
  }

  async findByUser(userId: string): Promise<IWallet | null> {
    const wallet = await this.repository.findUnique(
      {
        where: { userId },
      });
    return wallet;
  }

  async findAll(): Promise<IWallet[]> {
    const wallets = await this.repository.findMany({
      orderBy: { created_at: 'asc' },
      include: { user: {
        select: {
          id: true,
          email: true,
          name: true,
          identify: true,
          role: true,
        }
      }}
    });
    return wallets;
  }

  async create(data: IWalletRequest): Promise<IWallet> {
    const createWallet = await this.repository.create({
      data
    })
    return createWallet;
  }

  async update(id: string, data: IUpdateWalletRequest): Promise<IWallet> {
    const walletUpdate = await this.repository.update({
      data: data,
      where: {
        id
      }
    })

    return walletUpdate;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({
      where: {
        id
      }
    })
  }

}