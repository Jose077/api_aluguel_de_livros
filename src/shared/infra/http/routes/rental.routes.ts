import { CreateRentalController } from "@modules/rental/usecases/createRental/CreateRentalController";
import { Router } from "express";

const createRentalController = new CreateRentalController()

const rentalsRoutes = Router();

rentalsRoutes.post("/", createRentalController.handle)

export { rentalsRoutes }
