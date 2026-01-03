import { Router } from "express";

//* Import Routes *//
import { authRoutes } from "./usecases/Auth";
import { userRoutes } from "./usecases/User";



const PREFIX_ROUTE = "/api/v1" // Prefix Global route

const routes = Router();

routes.use(`${PREFIX_ROUTE}/auth`, authRoutes);
routes.use(`${PREFIX_ROUTE}/users`, userRoutes);
 
export { routes } 