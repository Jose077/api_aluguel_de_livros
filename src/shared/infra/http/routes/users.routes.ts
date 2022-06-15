import { Request, Response, Router } from "express";

const usersRoutes = Router();

usersRoutes.get("/", (req: Request, res: Response) => {
    return res.json({message: "Hello world user! "})
})

export { usersRoutes }