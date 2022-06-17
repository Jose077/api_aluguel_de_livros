import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRentalUseCase } from "./CreateRentalUseCase";


class CreateRentalController {

    async handle(req: Request, res: Response): Promise<Response> {

        const createRentalUseCase = container.resolve(CreateRentalUseCase)

        const { book_id, price, user_id} = req.body as ICreateRentalDTO;

        const rental = await createRentalUseCase.execute({
            book_id,
            price,
            user_id
        })

        return res.status(201).json(rental)

    }
}

export { CreateRentalController}