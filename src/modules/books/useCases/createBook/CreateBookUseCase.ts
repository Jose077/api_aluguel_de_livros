import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { IBookRepository } from "@modules/books/repositories/IBookRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateBookUseCase {
    constructor(
        @inject("BooksRepository")
        private booksRepository: IBookRepository
    ){}

    async execute({
        book_url,
        description,
        image_url,
        price,
        title
    }: ICreateBookDTO): Promise<Book> {

        const bookAlreadyExists = await this.booksRepository.findByTitle(title)

        if(bookAlreadyExists) {
            throw new AppError("Book already exists!")
        }

        const book = await this.booksRepository.create({
            book_url,
            description,
            image_url,
            price,
            title 
        })

        return book;

    }
}

export { CreateBookUseCase }