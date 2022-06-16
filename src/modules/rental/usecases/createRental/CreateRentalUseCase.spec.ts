import { RentalRepositoryInMemory } from "@modules/rental/repository/in-memory/RentalRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase";



let createRentalUseCase: CreateRentalUseCase
let rentalRepositoryInMemory: RentalRepositoryInMemory;

describe("Create Rental", () => {

    beforeEach(() => {
        rentalRepositoryInMemory = new RentalRepositoryInMemory();
        createRentalUseCase = new CreateRentalUseCase(rentalRepositoryInMemory)
    })

    it("shold be able to create a new rental", async () => {
        const rental = await createRentalUseCase.execute({
            book_id: "f6b46213-60bf-4982-867b-c0421a4ff2bc",
            price: 12.0,
            user_id: "d5e31d01-ab48-4eb7-8d0c-95d4d1216e97"
        })
        
        expect(rental).toHaveProperty("created_at");
        expect(rental).toHaveProperty("id");

        
    })
})