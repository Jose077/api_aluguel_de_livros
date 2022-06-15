import { AuthenticateUserController } from "@modules/accounts/useCases/AuthenticateUserController";
import { Request, Response, Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

usersRoutes.get("/", ensureAuthenticated,  (req: Request, res: Response) => {
    return res.json({message: "Hello world user! "})
})

usersRoutes.post("/session", authenticateUserController.handle)

export { usersRoutes }