import { Router } from "express";

//* Import Routes *//
import { authRoutes } from "./usecases/Auth";
import { userRoutes } from "./usecases/User";
import { walletRoutes } from "./usecases/Wallet";
import { serviceRoutes } from "./usecases/Service";
import { bookingRoutes } from "./usecases/Booking";
import { transactionRoutes } from "./usecases/Transaction";
import { metricsRoutes } from "./usecases/Metrics";

const PREFIX_ROUTE = "/api/v1" // Prefix Global route
const routes = Router();

routes.use(`${PREFIX_ROUTE}/auth`, authRoutes);
routes.use(`${PREFIX_ROUTE}/users`, userRoutes);
routes.use(`${PREFIX_ROUTE}/wallets`, walletRoutes);
routes.use(`${PREFIX_ROUTE}/services`, serviceRoutes);
routes.use(`${PREFIX_ROUTE}/bookings`, bookingRoutes);
routes.use(`${PREFIX_ROUTE}/transactions`, transactionRoutes);
routes.use(`${PREFIX_ROUTE}/metrics`, metricsRoutes);

 
export { routes } 