import { Router } from "express";

//* Import Routes *//
import { authRoutes } from "./usecases/Auth";
import { userRoutes } from "./usecases/User";
import { walletRoutes } from "./usecases/Wallet";



const PREFIX_ROUTE = "/api/v1" // Prefix Global route

const routes = Router();

routes.use(`${PREFIX_ROUTE}/auth`, authRoutes);
routes.use(`${PREFIX_ROUTE}/users`, userRoutes);
routes.use(`${PREFIX_ROUTE}/wallets`, walletRoutes);
 
export { routes } 