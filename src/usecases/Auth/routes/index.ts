import { Router } from "express";

import { signInFactory } from "../SignIn/SignInFactory";
import { 
  updateCredentialsFactory 
} from "../UpdateCredentials/UpdateCredentialsFactory";

export const authRoutes = Router();

authRoutes.route('/login')
  .post((request, response) => { return signInFactory().handle(request, response) } )

authRoutes.route('/credentials/:id')
  .put((request, response) => { return updateCredentialsFactory().handle(request, response) } )