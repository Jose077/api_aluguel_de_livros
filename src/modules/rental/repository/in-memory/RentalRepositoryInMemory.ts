import { Rental } from "@modules/rental/infra/typeorm/entity/Rental";
import { IRentalRepository } from "../IRentalRepository";



class RentalRepositoryInMemory implements IRentalRepository {

    rentals: Rental[] = []

    async create({
        book_id,
        price,
        user_id
    }: ICreateRentalDTO): Promise<Rental> {
        const rental = new Rental();

        

        Object.assign(
            rental,
            {
                book_id,
                price,
                user_id,
                created_at: new Date().toISOString()
            }
        );

        this.rentals.push(rental);

        return rental
    }

}

export { RentalRepositoryInMemory }