import { BooksRepositoryInMemory } from "@modules/books/repositories/in-memory/BooksRepositoryInMemory";
import { RentalRepositoryInMemory } from "@modules/rental/repository/in-memory/RentalRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateRentalUseCase } from "./CreateRentalUseCase";



let createRentalUseCase: CreateRentalUseCase
let rentalRepositoryInMemory: RentalRepositoryInMemory;
let booksRepositoryInMemory: BooksRepositoryInMemory

describe("Create Rental", () => {

    beforeEach(() => {
        rentalRepositoryInMemory = new RentalRepositoryInMemory();
        booksRepositoryInMemory = new BooksRepositoryInMemory()
        createRentalUseCase = new CreateRentalUseCase(rentalRepositoryInMemory, booksRepositoryInMemory)
    })

    it("shold be able to create a new rental", async () => {
        const book = await booksRepositoryInMemory.create({
            book_url: "https://livro/id_do_livro",
            description: "Este e um livro muito bom",
            image_url: "https://imagem0do0livro",
            price: 12.5,
            title: "livro bom"
        });

        const rental = await createRentalUseCase.execute({
            book_id: book.id,
            price: 12.0,
            user_id: "d5e31d01-ab48-4eb7-8d0c-95d4d1216e97",
        })
        
        expect(rental).toHaveProperty("created_at");
        expect(rental).toHaveProperty("id");

        
    })

    it("shold not be able to create a new rental for an already rented book", async () => {

        const book = await booksRepositoryInMemory.create({
            book_url: "https://livro/id_do_livro",
            description: "Este e um livro muito bom",
            image_url: "https://imagem0do0livro",
            price: 12.5,
            title: "livro bom",
            available: false
        });

        await expect(createRentalUseCase.execute({
            book_id: book.id,
            price: 12.0,
            user_id: "d5e31d01-ab48-4eb7-8d0c-95d4d1216e97"
        })).rejects.toEqual(new AppError("unavailable book!"))
    })

})