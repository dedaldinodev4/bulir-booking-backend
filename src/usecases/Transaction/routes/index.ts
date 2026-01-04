import { Router } from "express";

import { findAllTransactionsFactory } from "../FindAllTransactions/FindAllTransactionsFactory";
import { findByIdTransactionFactory } from "../FindByIdTransaction/FindByIdTransactionFactory";
import { updateTransactionFactory } from "../UpdateTransaction/UpdateTransactionFactory";
import { deleteTransactionFactory } from "../DeleteTransaction/DeleteTransactionFactory";
import { createTransactionFactory } from '../CreateTransaction/CreateTransactionFactory'

import { ensuredAuthenticated } from "../../../middlewares/ensuredAuthenticated";
import { is } from "../../../middlewares/authorization";

export const transactionRoutes = Router();

transactionRoutes.route('/')
  .post(
    ensuredAuthenticated(),
    is('PROVIDER', 'CLIENT'),
    (request, response) => { return createTransactionFactory().handle(request, response) })
  .get(
    ensuredAuthenticated(),
    (request, response) => { return findAllTransactionsFactory().handle(request, response) })

transactionRoutes.route('/:id')
  .get(
    ensuredAuthenticated(),
    (request, response) => { return findByIdTransactionFactory().handle(request, response) })
  .put(
    ensuredAuthenticated(),
    (request, response) => { return updateTransactionFactory().handle(request, response) })
  .delete(
    ensuredAuthenticated(),
    is('ADMIN'),
    (request, response) => { return deleteTransactionFactory().handle(request, response) })

