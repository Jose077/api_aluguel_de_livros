import { CreateBookController } from "@modules/books/useCases/CreateBookController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const booksRoutes = Router();

const createBookController = new CreateBookController();

booksRoutes.post("/", createBookController.handle)

export { booksRoutes }