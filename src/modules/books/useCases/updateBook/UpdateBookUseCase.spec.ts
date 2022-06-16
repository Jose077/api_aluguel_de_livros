import { BooksRepositoryInMemory } from "@modules/books/repositories/in-memory/BooksRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateBookUseCase } from "../createBook/CreateBookUseCase";
import { FindBookDetailsUseCase } from "../findBookDetails/FindBookDetailsUseCase";
import { UpdateBookUseCase } from "./UpdateBookUseCase";



let createBookUseCase: CreateBookUseCase
let updateBookUseCase: UpdateBookUseCase
let findBookDetailsUseCase: FindBookDetailsUseCase 
let booksRepositoryInMemory: BooksRepositoryInMemory;

describe("Update book", () => {

    beforeEach(() => {
        booksRepositoryInMemory = new BooksRepositoryInMemory();
        createBookUseCase = new CreateBookUseCase(booksRepositoryInMemory)
        updateBookUseCase = new UpdateBookUseCase(booksRepositoryInMemory)
        findBookDetailsUseCase = new FindBookDetailsUseCase(booksRepositoryInMemory)
    })

    it("shold be able to update a book", async () => {
        const book = await createBookUseCase.execute({
            book_url: "https://livro/id_do_livro",
            description: "Este e um livro muito bom",
            image_url: "https://imagem0do0livro",
            price: 12.5,
            title: "livro bom"
        })

        await updateBookUseCase.execute({
            id: book.id,
            price: 1200.5,
            title: "livro bom editado"
        })

        const bookDeatails = await findBookDetailsUseCase.execute(book.id)

        expect(bookDeatails.price).toBe(1200.5);
        expect(bookDeatails.title).toBe("livro bom editado");
 
    })



})