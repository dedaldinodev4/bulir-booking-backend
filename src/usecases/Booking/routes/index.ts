import { Router } from "express";

import { findAllBookingsFactory } from "../FindAllBookings/FindAllBookingsFactory";
import { findByIdBookingFactory } from "../FindByIdBooking/FindByIdBookingFactory";
import { updateBookingFactory } from "../UpdateBooking/UpdateBookingFactory";
import { deleteBookingFactory } from "../DeleteBooking/DeleteBookingFactory";
import { createBookingFactory } from '../CreateBooking/CreateBookingFactory'
import { cancelBookingFactory } from "../CancelBooking/CancelBookingFactory";
import { completeBookingFactory } from "../CompleteBooking/CompleteBookingFactory";

import { ensuredAuthenticated } from "../../../middlewares/ensuredAuthenticated";
import { is } from "../../../middlewares/authorization";

export const bookingRoutes = Router();

bookingRoutes.route('/')
  .post(
    ensuredAuthenticated(),
    is('CLIENT'),
    (request, response) => { return createBookingFactory().handle(request, response) })
  .get(ensuredAuthenticated(), (request, response) => { return findAllBookingsFactory().handle(request, response) })

bookingRoutes.route('/:id')
  .get(
    ensuredAuthenticated(), 
    (request, response) => { return findByIdBookingFactory().handle(request, response) })
  .put(
    ensuredAuthenticated(), 
    (request, response) => { return updateBookingFactory().handle(request, response) })
  .delete(
    ensuredAuthenticated(),
    is('ADMIN'),
    (request, response) => { return deleteBookingFactory().handle(request, response) })

bookingRoutes.route('/:id/cancel')
  .put(
    ensuredAuthenticated(),
    is('CLIENT', 'PROVIDER'),
    (request, response) => { return cancelBookingFactory().handle(request, response) })

bookingRoutes.route('/:id/complete')
  .put(
    ensuredAuthenticated(),
    is('PROVIDER'),
    (request, response) => { return completeBookingFactory().handle(request, response) })


  