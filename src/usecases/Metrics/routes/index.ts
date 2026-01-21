import { Router } from "express";

import { getMetricsFactory } from "../GetMetrics/GetMetricsFactory";
import { ensuredAuthenticated } from "../../../middlewares/ensuredAuthenticated";
import { is } from "../../../middlewares/authorization";

export const metricsRoutes = Router();

metricsRoutes.route('/')
  .get(
    ensuredAuthenticated(),
    is('CLIENT', 'PROVIDER'),
    (request, response) => {
      return getMetricsFactory().handle(request, response)
    })