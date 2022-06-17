import { CreateRentalController } from "@modules/rental/usecases/createRental/CreateRentalController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createRentalController = new CreateRentalController()

const rentalsRoutes = Router();

rentalsRoutes.post("/", ensureAuthenticated, createRentalController.handle)

export { rentalsRoutes }
