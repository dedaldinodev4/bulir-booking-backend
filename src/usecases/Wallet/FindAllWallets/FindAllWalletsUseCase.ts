import { 
  IWalletRepository 
} from "../../../repositories/IWalletRepository";
import { IWallet } from "./FindAllWalletsDTO";

export class FindAllWalletsUseCase {

  constructor(
    private walletRepository: IWalletRepository
  ) { }

  async execute(): Promise<IWallet[]> {

    const result = await this.walletRepository.findAll();
    return result;
  }
}