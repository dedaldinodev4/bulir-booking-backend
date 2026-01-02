import { Router } from "express";


import { findAllUsersFactory } from "../FindAllUsers/FindAllUsersFactory";
import { findByIdUserFactory } from "../FindByIdUser/FindByIdUserFactory";
import { findByEmailUserFactory } from "../FindByEmailUser/FindByEmailUserFactory";
import { updateUserFactory } from "../UpdateUser/UpdateUserFactory";
import { deleteUserFactory } from "../DeleteUser/DeleteUserFactory";
import { createUserFactory } from '../CreateUser/CreateUserFactory';

export const userRoutes = Router();

userRoutes.route('/')
  .post((request, response) => { return createUserFactory().handle(request, response) } )
  .get((request, response) => { return findAllUsersFactory().handle(request, response) } )

userRoutes.route('/:id')
  .get((request, response) => { return findByIdUserFactory().handle(request, response) } )
  .put((request, response) => { return updateUserFactory().handle(request, response) } )
  
userRoutes.route('/byEmail/:email')
  .get((request, response) => { return findByEmailUserFactory().handle(request, response) } )
  
userRoutes.route('/:id/deletedBy/:user')
  .delete((request, response) => { return deleteUserFactory().handle(request, response) } )
  