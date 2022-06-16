import { CreateBookController } from "@modules/books/useCases/createBook/CreateBookController";
import { FindBooksController } from "@modules/books/useCases/findBooks/FindBooksController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const booksRoutes = Router();

const createBookController = new CreateBookController();
const findBooksController = new FindBooksController();


booksRoutes.post("/", createBookController.handle)
booksRoutes.get("/", findBooksController.handle)


export { booksRoutes }