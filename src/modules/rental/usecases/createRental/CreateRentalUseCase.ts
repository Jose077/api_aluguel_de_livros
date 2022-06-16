import { Rental } from "@modules/rental/infra/typeorm/entities/Rental";
import { IRentalRepository } from "@modules/rental/repository/IRentalRepository";
import { inject, injectable } from "tsyringe";



@injectable()
class CreateRentalUseCase {
    constructor(
        @inject("RentalRepository")
        private rentalRepository: IRentalRepository
    ){}

    async execute({
        book_id,
        price,
        user_id,
    }: ICreateRentalDTO): Promise<Rental> {

        const rental = await this.rentalRepository.create({
            book_id,
            price,
            user_id,
        });


        return rental

    }

}

export { CreateRentalUseCase }