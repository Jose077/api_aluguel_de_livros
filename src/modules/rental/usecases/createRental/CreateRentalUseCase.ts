import { IBookRepository } from "@modules/books/repositories/IBookRepository";
import { Rental } from "@modules/rental/infra/typeorm/entities/Rental";
import { IRentalRepository } from "@modules/rental/repository/IRentalRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";



@injectable()
class CreateRentalUseCase {
    constructor(
        @inject("RentalRepository")
        private rentalRepository: IRentalRepository,

        @inject("BooksRepository")
        private bookRepository: IBookRepository
    ) { }

    async execute({
        book_id,
        price,
        user_id,
    }: ICreateRentalDTO): Promise<Rental> {

        const book = await this.bookRepository.findById(book_id);

        if (!book.available) {
            throw new AppError("unavailable book!")
        }

        // Cadastra aluguel do livro
        const rental = await this.rentalRepository.create({
            book_id,
            price,
            user_id,
        });

        // Altera o livro para não alugavel
        await this.bookRepository.update({
            id: book_id,
            available: false
        })


        return rental

    }

}

export { CreateRentalUseCase }