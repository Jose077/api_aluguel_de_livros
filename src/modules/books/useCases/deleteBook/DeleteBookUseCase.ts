import { IBookRepository } from "@modules/books/repositories/IBookRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteBookUseCase {

    constructor(
        @inject("BooksRepository")
        private booksRepository: IBookRepository
    ){}

    async execute(id: string) {
        return await this.booksRepository.delete(id)
    }

}

export { DeleteBookUseCase }