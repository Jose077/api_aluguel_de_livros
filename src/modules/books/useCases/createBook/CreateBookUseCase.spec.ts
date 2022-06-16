import { BooksRepositoryInMemory } from "@modules/books/repositories/in-memory/BooksRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateBookUseCase } from "./CreateBookUseCase";



let createBookUseCase: CreateBookUseCase
let booksRepositoryInMemory: BooksRepositoryInMemory;

describe("Create book", () => {

    beforeEach(() => {
        booksRepositoryInMemory = new BooksRepositoryInMemory();
        createBookUseCase = new CreateBookUseCase(booksRepositoryInMemory)
    })

    it("shold be able to create a new book", async () => {
        const book = await createBookUseCase.execute({
            book_url: "https://livro/id_do_livro",
            description: "Este e um livro muito bom",
            image_url: "https://imagem0do0livro",
            price: 12.5,
            title: "livro bom"
        })

        expect(book).toHaveProperty("id");
        
    })

    it("should not be able to create a book if it exists", async () => {

        await createBookUseCase.execute({
            book_url: "https://livro/id_do_livro",
            description: "Este e um livro muito bom",
            image_url: "https://imagem0do0livro",
            price: 12.5,
            title: "livro bom"
        })

        await expect(createBookUseCase.execute({
            book_url: "https://livro/id_do_livro",
            description: "descricao deste livro",
            image_url: "https://imagem0do0livro",
            price: 120.5,
            title: "livro bom"
        })).rejects.toEqual(new AppError("Book already exists!"))
        
    })


})