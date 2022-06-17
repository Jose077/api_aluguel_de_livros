import { BooksRepositoryInMemory } from "@modules/books/repositories/in-memory/BooksRepositoryInMemory";
import { CreateBookUseCase } from "../createBook/CreateBookUseCase";
import { FindBooksUseCase } from "./FindBooksUseCase";


let createBookUseCase: CreateBookUseCase
let findBooksUseCase: FindBooksUseCase

let booksRepositoryInMemory: BooksRepositoryInMemory;

describe("List books", () => {

    beforeEach(() => {
        booksRepositoryInMemory = new BooksRepositoryInMemory();
        findBooksUseCase = new FindBooksUseCase(booksRepositoryInMemory);
        createBookUseCase = new CreateBookUseCase(booksRepositoryInMemory)
    })

    it("shold be able to list all books", async () => {
        await createBookUseCase.execute({
            book_url: "https://livro/id_do_livro",
            description: "Este e um livro muito bom",
            image_url: "https://imagem0do0livro",
            price: 12.5,
            title: "livro bom"
        })

        await createBookUseCase.execute({
            book_url: "https://livro/id_do_livro",
            description: "Este e um livro muito bom",
            image_url: "https://imagem0do0livro",
            price: 12.5,
            title: "livro bom 2"
        })

        const books = await findBooksUseCase.execute({})

        expect(books.length).toBeGreaterThanOrEqual(2);
        expect(books[0]).toHaveProperty("id")
        
    })



})