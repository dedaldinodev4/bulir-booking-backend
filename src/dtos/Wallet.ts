import Decimal from "decimal.js";
import { IBase } from "./Base";


export interface IWallet extends IBase, IWalletRequest { }

export interface IWalletRequest extends IUpdateWalletRequest {
  userId: string;
}

export interface IUpdateWalletRequest {
  balance: Decimal;
}
