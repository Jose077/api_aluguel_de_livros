import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteBookUseCase } from "./DeleteBookUseCase";



class DeleteBookController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const deleteBookUseCase = container.resolve(DeleteBookUseCase);

        const result = await deleteBookUseCase.execute(id)

        if (result == 0) return res.status(404).json({ message: "register not found!"})

        return res.status(200).json({message: "successfully deleted book!"})
    }
}

export { DeleteBookController }