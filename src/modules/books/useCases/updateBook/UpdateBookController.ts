import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateBookUseCase } from "./UpdateBookUseCase";


class UpdateBookController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { book_url, description, image_url, price, title, author, edition, id, available } = req.body as IUpdateBookDTO;

        const updateBookUseCase = container.resolve(UpdateBookUseCase)

        const affected = await updateBookUseCase.execute({
            book_url,
            description,
            image_url,
            price,
            title,
            author, 
            edition, 
            id 
        })

        // Retorna resposta de acordo com a resposta do db
        const message = (affected == 1) ? { message: "successfully updated!"} : {message: "register not found!"}

        return res.status(201).json(message)
    }
}

export { UpdateBookController }