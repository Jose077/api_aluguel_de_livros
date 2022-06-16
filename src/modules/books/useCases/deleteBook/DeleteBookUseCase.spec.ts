import { BooksRepositoryInMemory } from "@modules/books/repositories/in-memory/BooksRepositoryInMemory";
import { CreateBookUseCase } from "../createBook/CreateBookUseCase";
import { FindBookDetailsUseCase } from "../findBookDetails/FindBookDetailsUseCase";
import { DeleteBookUseCase } from "./DeleteBookUseCase";


let createBookUseCase: CreateBookUseCase
let deleteBookUseCase: DeleteBookUseCase
let findBookDetailsUseCase: FindBookDetailsUseCase

let booksRepositoryInMemory: BooksRepositoryInMemory;

describe("Deleta a book", () => {

    beforeEach(() => {
        booksRepositoryInMemory = new BooksRepositoryInMemory();
        deleteBookUseCase = new DeleteBookUseCase(booksRepositoryInMemory);
        createBookUseCase = new CreateBookUseCase(booksRepositoryInMemory)
        findBookDetailsUseCase = new FindBookDetailsUseCase(booksRepositoryInMemory)
    })

    it("shold be able to delete a books", async () => {

        const book = await createBookUseCase.execute({
            book_url: "https://livro/id_do_livro",
            description: "Este e um livro muito bom",
            image_url: "https://imagem0do0livro",
            price: 12.5,
            title: "livro bom"
        })

        await deleteBookUseCase.execute(book.id)

        const books = await findBookDetailsUseCase.execute(book.id)

        expect(books).toBe(undefined)
        
    })



})