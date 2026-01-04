import { Router } from "express";

import { findAllBookingsFactory } from "../FindAllBookings/FindAllBookingsFactory";
import { findByIdBookingFactory } from "../FindByIdBooking/FindByIdBookingFactory";
import { updateBookingFactory } from "../UpdateBooking/UpdateBookingFactory";
import { deleteBookingFactory } from "../DeleteBooking/DeleteBookingFactory";
import { createBookingFactory } from '../CreateBooking/CreateBookingFactory'
import { ensuredAuthenticated } from "../../../middlewares/ensuredAuthenticated";

export const bookingRoutes = Router();

bookingRoutes.route('/')
  .post(ensuredAuthenticated(), (request, response) => { return createBookingFactory().handle(request, response) } )
  .get((request, response) => { return findAllBookingsFactory().handle(request, response) } )

bookingRoutes.route('/:id')
  .get((request, response) => { return findByIdBookingFactory().handle(request, response) } )
  .put((request, response) => { return updateBookingFactory().handle(request, response) } )
  
bookingRoutes.route('/:id/deletedBy/:user')
  .delete((request, response) => { return deleteBookingFactory().handle(request, response) } )