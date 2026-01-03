import { Router } from "express";

import { findAllPhonesFactory } from "../FindAllWallets/FindAllWalletsFactory";
import { findByIdPhoneFactory } from "../FindByIdWallet/FindByIdWalletFactory";
import { updatePhoneFactory } from "../UpdatePhone/UpdateWalletFactory";
import { deletePhoneFactory } from "../DeleteWallet/DeleteWalletFactory";
import { createPhoneFactory } from '../CreateWallet/CreateWalletFactory'
import { findByUserPhoneFactory } from "../FindByUserWallet/FindByUserWalletFactory";

export const phoneRoutes = Router();

phoneRoutes.route('/')
  .post((request, response) => { return createPhoneFactory().handle(request, response) } )
  .get((request, response) => { return findAllPhonesFactory().handle(request, response) } )

phoneRoutes.route('/:id')
  .get((request, response) => { return findByIdPhoneFactory().handle(request, response) } )
  .put((request, response) => { return updatePhoneFactory().handle(request, response) } )
  
phoneRoutes.route('/:id/deletedBy/:user')
  .delete((request, response) => { return deletePhoneFactory().handle(request, response) } )

phoneRoutes.route('/byUser/:id_user')
  .get((request, response) => { return findByUserPhoneFactory().handle(request, response) } )