import { IBookRepository } from "@modules/books/repositories/IBookRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class FindBooksUseCase {

    constructor(
        @inject("BooksRepository")
        private booksRepository: IBookRepository
    ){}

    async execute(param: IParamsFindBooks) {
        return await this.booksRepository.find(param)
    }
}

export { FindBooksUseCase }