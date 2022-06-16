import { Rental } from "../infra/typeorm/entities/Rental"

interface IRentalRepository {
    create(data: ICreateRentalDTO): Promise<Rental>
    bookAvailable(id: string): Promise<boolean>
}

export { IRentalRepository }


