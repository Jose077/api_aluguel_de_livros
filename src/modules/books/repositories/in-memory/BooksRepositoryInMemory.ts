import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { AppError } from "@shared/errors/AppError";
import { IBookRepository } from "../IBookRepository";


class BooksRepositoryInMemory implements IBookRepository {

    books: Book[] = [];

    async find(): Promise<Book[]> {
        return this.books;
    }

    async findById(id: string): Promise<Book> {
        return this.books.find(book => book.id == id)
    }

    async findByTitle(title: string): Promise<Book> {
        return this.books.find(book => book.title == title)
    }

    async create({
        book_url,
        description,
        image_url,
        price,
        title,
        author = "Desconhecido",
        edition = 1
    }: ICreateBookDTO): Promise<Book> {
        const book = new Book();

        Object.assign(book, {
            book_url,
            description,
            image_url,
            price,
            title,
            author,
            edition
        })

        this.books.push(book)

        return book
    }

    async update( data : IUpdateBookDTO): Promise<number> {

        const index = this.books.findIndex(book => book.id == data.id);

        if (index == -1) return 0;

        const booksMock = this.books

        // Atualiza o campo de acordo com a chave se o valor existir
        Object.keys(data).map(function (key, value) {
            if (data[`${key}`]) {
                booksMock[index][`${key}`] = data[`${key}`]
            }
        });

        this.books = booksMock

        return 1

    }

    async delete(id: string): Promise<number> {

        const bookExists = await this.findById(id);

        if (!bookExists) return 0

        const result = this.books.filter(book => book.id != id);

        this.books = result ?? []

        return 1

    }

}

export { BooksRepositoryInMemory }