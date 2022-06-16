import { Rental } from "../infra/typeorm/entity/Rental"

interface IRentalRepository {
    create(data: ICreateRentalDTO): Promise<Rental>
}

export { IRentalRepository }


