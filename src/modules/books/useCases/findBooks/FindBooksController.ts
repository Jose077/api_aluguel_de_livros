import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindBooksUseCase } from "./FindBooksUseCase";


class FindBooksController {

    async handle(req: Request, res: Response): Promise<Response> {
        const findBooksUseCase = container.resolve(FindBooksUseCase);

        const params = req.query;

        const books = await findBooksUseCase.execute(params)

        return res.status(200).json(books)
    }
}

export { FindBooksController }