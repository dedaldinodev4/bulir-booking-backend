import { Router } from "express";

import { findAllServicesFactory } from "../FindAllServices/FindAllServicesFactory";
import { findByIdServiceFactory } from "../FindByIdService/FindByIdServiceFactory";
import { updateServiceFactory } from "../UpdateService/UpdateServiceFactory";
import { deleteServiceFactory } from "../DeleteService/DeleteServiceFactory";
import { createServiceFactory } from '../CreateService/CreateServiceFactory'
import { findByProviderServiceFactory } from "../FindByProviderService/FindByProviderServiceFactory";

import { ensuredAuthenticated } from "../../../middlewares/ensuredAuthenticated";
import { is } from "../../../middlewares/authorization";

export const serviceRoutes = Router();

serviceRoutes.route('/')
  .post(
    ensuredAuthenticated(),
    is('PROVIDER'),
    (request, response) => { return createServiceFactory().handle(request, response) } )
  .get(
    ensuredAuthenticated(),
    (request, response) => { return findAllServicesFactory().handle(request, response) } )

serviceRoutes.route('/:id')
  .get(
    ensuredAuthenticated(),
    (request, response) => { return findByIdServiceFactory().handle(request, response) } )
  .put(
    ensuredAuthenticated(),
    (request, response) => { return updateServiceFactory().handle(request, response) } )
  .delete(
    ensuredAuthenticated(),
    (request, response) => { return deleteServiceFactory().handle(request, response) } )

serviceRoutes.route('/byProvider/:providerId')
  .get(
    ensuredAuthenticated(),
    (request, response) => { return findByProviderServiceFactory().handle(request, response) } )