import { CreateBookController } from "@modules/books/useCases/createBook/CreateBookController";
import { DeleteBookController } from "@modules/books/useCases/deleteBook/DeleteBookController";
import { FindBookDetailsController } from "@modules/books/useCases/findBookDetails/FindBookDetailsController";
import { FindBooksController } from "@modules/books/useCases/findBooks/FindBooksController";
import { UpdateBookController } from "@modules/books/useCases/updateBook/UpdateBookController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const booksRoutes = Router();

const createBookController = new CreateBookController();
const findBooksController = new FindBooksController();
const findBookDetailsController = new FindBookDetailsController();
const deleteBookController = new DeleteBookController();
const updateBookController = new UpdateBookController()


booksRoutes.post("/", ensureAuthenticated, createBookController.handle)
booksRoutes.get("/", ensureAuthenticated,  findBooksController.handle)
booksRoutes.get("/:id", ensureAuthenticated,  findBookDetailsController.handle)
booksRoutes.delete("/:id", ensureAuthenticated, deleteBookController.handle)
booksRoutes.patch("/", ensureAuthenticated,  updateBookController.handle)

export { booksRoutes }