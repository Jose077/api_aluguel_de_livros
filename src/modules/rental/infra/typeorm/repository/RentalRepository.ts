import { IRentalRepository } from "@modules/rental/repository/IRentalRepository";
import { getRepository, Repository } from "typeorm";
import { Rental } from "../entities/Rental";

class RentalRepository implements IRentalRepository {

    private repository: Repository<Rental>;

    constructor() {
        this.repository = getRepository(Rental)
    }

    async create({
        book_id,
        price,
        user_id,
    }: ICreateRentalDTO): Promise<Rental> {

        const rental = await this.repository.create({
            book_id,
            price,
            user_id,
        });

        await this.repository.save(rental);

        return rental
    }

}


export { RentalRepository }