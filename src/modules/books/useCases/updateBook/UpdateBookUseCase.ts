import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { IBookRepository } from "@modules/books/repositories/IBookRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateBookUseCase {
    constructor(
        @inject("BooksRepository")
        private booksRepository: IBookRepository,
    ){}

    async execute({
        id,    
        book_url,
        description,
        image_url,
        price,
        title,
        author,
        edition,
        available
    }: IUpdateBookDTO): Promise<number> {

        const book = await this.booksRepository.findById(id);

        if (!book.available) {
            throw new AppError("unavailable book!")
        }

        const affected = await this.booksRepository.update({
            id,
            book_url,
            description,
            image_url,
            price,
            title,
            author,
            edition,
            available 
        })

        return affected;
    }
}

export { UpdateBookUseCase }