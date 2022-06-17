import { IBookRepository } from "@modules/books/repositories/IBookRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class FindBookDetailsUseCase {

    constructor(
        @inject("BooksRepository")
        private booksRepository: IBookRepository
    ){}

    async execute(id: string): Promise<IResponseBookDetailDTO> {
        return await this.booksRepository.findById(id)
    }
}

export { FindBookDetailsUseCase }