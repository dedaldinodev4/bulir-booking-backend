import { Router } from "express";

import { findAllServicesFactory } from "../FindAllServices/FindAllServicesFactory";
import { findByIdServiceFactory } from "../FindByIdService/FindByIdServiceFactory";
import { updateServiceFactory } from "../UpdateService/UpdateServiceFactory";
import { deleteServiceFactory } from "../DeleteService/DeleteServiceFactory";
import { createServiceFactory } from '../CreateService/CreateServiceFactory'
import { findByProviderServiceFactory } from "../FindByProviderService/FindByProviderServiceFactory";

export const serviceRoutes = Router();

serviceRoutes.route('/')
  .post((request, response) => { return createServiceFactory().handle(request, response) } )
  .get((request, response) => { return findAllServicesFactory().handle(request, response) } )

serviceRoutes.route('/:id')
  .get((request, response) => { return findByIdServiceFactory().handle(request, response) } )
  .put((request, response) => { return updateServiceFactory().handle(request, response) } )
  
serviceRoutes.route('/:id/deletedBy/:user')
  .delete((request, response) => { return deleteServiceFactory().handle(request, response) } )

serviceRoutes.route('/byProvider/:providerId')
  .get((request, response) => { return findByProviderServiceFactory().handle(request, response) } )