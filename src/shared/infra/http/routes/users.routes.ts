import { AuthenticateUserController } from "@modules/accounts/useCases/AuthenticateUserController";
import { Router } from "express";

const usersRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

usersRoutes.post("/session", authenticateUserController.handle)

export { usersRoutes }