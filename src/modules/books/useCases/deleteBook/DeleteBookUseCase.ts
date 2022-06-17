import { IBookRepository } from "@modules/books/repositories/IBookRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteBookUseCase {

    constructor(
        @inject("BooksRepository")
        private booksRepository: IBookRepository
    ){}

    async execute(id: string) {
        const book = await this.booksRepository.findById(id);

        if (!book?.available) {
            throw new AppError("unavailable book!")
        }

        return await this.booksRepository.delete(id)
    }

}

export { DeleteBookUseCase }