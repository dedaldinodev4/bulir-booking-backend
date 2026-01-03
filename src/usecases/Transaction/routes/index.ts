import { Router } from "express";

import { findAllTransactionsFactory } from "../FindAllTransactions/FindAllTransactionsFactory";
import { findByIdTransactionFactory } from "../FindByIdTransaction/FindByIdTransactionFactory";
import { updateTransactionFactory } from "../UpdateTransaction/UpdateTransactionFactory";
import { deleteTransactionFactory } from "../DeleteTransaction/DeleteTransactionFactory";
import { createTransactionFactory } from '../CreateTransaction/CreateTransactionFactory'

export const transactionRoutes = Router();

transactionRoutes.route('/')
  .post((request, response) => { return createTransactionFactory().handle(request, response) } )
  .get((request, response) => { return findAllTransactionsFactory().handle(request, response) } )

transactionRoutes.route('/:id')
  .get((request, response) => { return findByIdTransactionFactory().handle(request, response) } )
  .put((request, response) => { return updateTransactionFactory().handle(request, response) } )
  
transactionRoutes.route('/:id/deletedBy/:user')
  .delete((request, response) => { return deleteTransactionFactory().handle(request, response) } )