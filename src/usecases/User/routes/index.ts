import { Router } from "express";


import { findAllUsersFactory } from "../FindAllUsers/FindAllUsersFactory";
import { findByIdUserFactory } from "../FindByIdUser/FindByIdUserFactory";
import { findByEmailUserFactory } from "../FindByEmailUser/FindByEmailUserFactory";
import { updateUserFactory } from "../UpdateUser/UpdateUserFactory";
import { deleteUserFactory } from "../DeleteUser/DeleteUserFactory";
import { createUserFactory } from '../CreateUser/CreateUserFactory';
import { disableUserFactory } from "../DisableUser/DisableUserFactory";
import { userMeFactory } from "../UserMe/UserMeFactory";

import { ensuredAuthenticated } from "../../../middlewares/ensuredAuthenticated";
import { is } from "../../../middlewares/authorization";


export const userRoutes = Router();

userRoutes.route('/')
  .post(
    ensuredAuthenticated(),
    is('ADMIN'),
    (request, response) => { return createUserFactory().handle(request, response) })
  .get(
    ensuredAuthenticated(),
    (request, response) => { return findAllUsersFactory().handle(request, response) })

userRoutes.route('/:id')
  .get(
    ensuredAuthenticated(),
    (request, response) => { return findByIdUserFactory().handle(request, response) })
  .put(
    ensuredAuthenticated(),
    (request, response) => { return updateUserFactory().handle(request, response) })
  .delete(
    ensuredAuthenticated(),
    is('ADMIN'),
    (request, response) => { return deleteUserFactory().handle(request, response) })

userRoutes.route('/:id/disable')
  .put(
    ensuredAuthenticated(),
    is('ADMIN', 'CLIENT', 'PROVIDER'),
    (request, response) => { return disableUserFactory().handle(request, response) })

userRoutes.route('/byEmail/:email')
  .get(
    ensuredAuthenticated(),
    (request, response) => { return findByEmailUserFactory().handle(request, response) })

userRoutes.route('/me')
  .get(
    ensuredAuthenticated(),
    (request, response) => { return userMeFactory().handle(request, response) })


