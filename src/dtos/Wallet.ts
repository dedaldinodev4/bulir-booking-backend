import Decimal from "decimal.js";
import { IBase } from "./Base";


export interface IWallet extends IBase, IWalletRequest { }

export interface IWalletRequest {
  balance: Decimal;
  userId: string;
}
