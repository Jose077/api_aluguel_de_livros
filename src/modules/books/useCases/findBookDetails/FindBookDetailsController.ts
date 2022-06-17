import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindBookDetailsUseCase } from "./FindBookDetailsUseCase";


class FindBookDetailsController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const findBookDetailsUseCase = container.resolve(FindBookDetailsUseCase);

        const books = await findBookDetailsUseCase.execute(id)

        return res.status(200).json(books || { message: "no records found!"})
    }
}

export { FindBookDetailsController }