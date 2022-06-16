import { CreateBookController } from "@modules/books/useCases/createBook/CreateBookController";
import { DeleteBookController } from "@modules/books/useCases/deleteBook/DeleteBookController";
import { FindBookDetailsController } from "@modules/books/useCases/findBookDetails/FindBookDetailsController";
import { FindBooksController } from "@modules/books/useCases/findBooks/FindBooksController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const booksRoutes = Router();

const createBookController = new CreateBookController();
const findBooksController = new FindBooksController();
const findBookDetailsController = new FindBookDetailsController();
const deleteBookController = new DeleteBookController();


booksRoutes.post("/", createBookController.handle)
booksRoutes.get("/", findBooksController.handle)
booksRoutes.get("/:id", findBookDetailsController.handle)
booksRoutes.delete("/:id", deleteBookController.handle)




export { booksRoutes }