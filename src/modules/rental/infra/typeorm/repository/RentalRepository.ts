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

    async bookAvailable(id: string): Promise<boolean> {
        const result = await this.repository.createQueryBuilder("alugueis")
                .where("alugueis.book_id = :id", { id })
                .andWhere("alugueis.return_date IS NULL", { id }).getOne();

        console.log(result);


        return false
    } 
}


export { RentalRepository }