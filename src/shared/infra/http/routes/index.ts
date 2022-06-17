import { Router } from "express";
import { booksRoutes } from "./books.routes";
import { rentalsRoutes } from "./rental.routes";
import { usersRoutes } from "./users.routes";


const router = Router();

router.use("/users", usersRoutes)
router.use("/books", booksRoutes)
router.use("/rentals", rentalsRoutes)


export { router };
