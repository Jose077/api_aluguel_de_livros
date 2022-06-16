import { BooksRepositoryInMemory } from "@modules/books/repositories/in-memory/BooksRepositoryInMemory";
import { CreateBookUseCase } from "../createBook/CreateBookUseCase";
import { FindBookDetailsUseCase } from "./FindBookDetailsUseCase";


let createBookUseCase: CreateBookUseCase
let findBookDetailsUseCase: FindBookDetailsUseCase

let booksRepositoryInMemory: BooksRepositoryInMemory;

describe("List book details", () => {

    beforeEach(() => {
        booksRepositoryInMemory = new BooksRepositoryInMemory();
        findBookDetailsUseCase = new FindBookDetailsUseCase(booksRepositoryInMemory);
        createBookUseCase = new CreateBookUseCase(booksRepositoryInMemory)
    })

    it("should be able to return details of a book", async () => {
        const book =  await createBookUseCase.execute({
            book_url: "https://livro/id_do_livro",
            description: "Este e um livro muito bom",
            image_url: "https://imagem0do0livro",
            price: 12.5,
            title: "livro bom",
            author: "Desconhecido",
            edition: 1
        })

        const books = await findBookDetailsUseCase.execute(book.id)

        expect(books).toHaveProperty("id")
        expect(books).toHaveProperty("price")
        expect(books).toHaveProperty("author")

    })



})