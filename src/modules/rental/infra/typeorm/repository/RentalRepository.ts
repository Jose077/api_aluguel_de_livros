import { IRentalRepository } from "@modules/rental/repository/IRentalRepository";
import { Repository } from "typeorm";
import { Rental } from "../entity/Rental";

class RentalRepository implements IRentalRepository {

    private repository: Repository<Rental>;

    async create({
        book_id,
        price,
        user_id,
    }: ICreateRentalDTO): Promise<Rental> {

        const rental = this.repository.create({
            book_id,
            price,
            user_id,
        });

        await this.repository.save(rental);

        return rental
    }

} 

export { RentalRepository }