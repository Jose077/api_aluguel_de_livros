import { inject, injectable } from "tsyringe";
import { Book } from "../infra/typeorm/entities/Book";
import { IBookRepository } from "../repositories/IBookRepository";

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