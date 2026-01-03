import { Router } from "express";

import { findAllWalletsFactory } from "../FindAllWallets/FindAllWalletsFactory";
import { findByIdWalletFactory } from "../FindByIdWallet/FindByIdWalletFactory";
import { updateWalletFactory } from "../UpdateWallet/UpdateWalletFactory";
import { deleteWalletFactory } from "../DeleteWallet/DeleteWalletFactory";
import { createWalletFactory } from '../CreateWallet/CreateWalletFactory'
import { findByUserWalletFactory } from "../FindByUserWallet/FindByUserWalletFactory";

export const walletRoutes = Router();

walletRoutes.route('/')
  .post((request, response) => { return createWalletFactory().handle(request, response) } )
  .get((request, response) => { return findAllWalletsFactory().handle(request, response) } )

walletRoutes.route('/:id')
  .get((request, response) => { return findByIdWalletFactory().handle(request, response) } )
  .put((request, response) => { return updateWalletFactory().handle(request, response) } )
  
walletRoutes.route('/:id/deletedBy/:user')
  .delete((request, response) => { return deleteWalletFactory().handle(request, response) } )

walletRoutes.route('/byUser/:userId')
  .get((request, response) => { return findByUserWalletFactory().handle(request, response) } )