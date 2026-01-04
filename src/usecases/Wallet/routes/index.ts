import { Router } from "express";

import { findAllWalletsFactory } from "../FindAllWallets/FindAllWalletsFactory";
import { findByIdWalletFactory } from "../FindByIdWallet/FindByIdWalletFactory";
import { updateWalletFactory } from "../UpdateWallet/UpdateWalletFactory";
import { deleteWalletFactory } from "../DeleteWallet/DeleteWalletFactory";
import { createWalletFactory } from '../CreateWallet/CreateWalletFactory'
import { findByUserWalletFactory } from "../FindByUserWallet/FindByUserWalletFactory";

import { ensuredAuthenticated } from "../../../middlewares/ensuredAuthenticated";
import { is } from "../../../middlewares/authorization";

export const walletRoutes = Router();

walletRoutes.route('/')
  .post(
    ensuredAuthenticated(),
    is('PROVIDER', 'CLIENT'),
    (request, response) => { return createWalletFactory().handle(request, response) } )
  .get((request, response) => { return findAllWalletsFactory().handle(request, response) } )

walletRoutes.route('/:id')
  .get(
    ensuredAuthenticated(),
    (request, response) => { return findByIdWalletFactory().handle(request, response) } )
  .put(
    ensuredAuthenticated(),
    (request, response) => { return updateWalletFactory().handle(request, response) } )
  .delete(
    ensuredAuthenticated(),
    is('ADMIN'),
    (request, response) => { return deleteWalletFactory().handle(request, response) } )

walletRoutes.route('/byUser/:userId')
  .get(
    ensuredAuthenticated(),
    (request, response) => { return findByUserWalletFactory().handle(request, response) } )