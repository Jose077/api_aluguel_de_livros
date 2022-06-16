import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBookUseCase } from "./CreateBookUseCase";


class CreateBookController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { book_url, description, image_url, price, title} = req.body as any;

        const createBookUseCase = container.resolve(CreateBookUseCase)

        const book = await createBookUseCase.execute({
            book_url,
            description,
            image_url,
            price,
            title,
        })

        // @ts-ignore
        return res.status(201).json(book)
    }
}

export { CreateBookController }