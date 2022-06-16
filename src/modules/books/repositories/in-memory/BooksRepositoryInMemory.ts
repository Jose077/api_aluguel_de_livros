import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { IBookRepository } from "../IBookRepository";


class BooksRepositoryInMemory implements IBookRepository {

    books: Book[] = [];

    async find(): Promise<Book[]> {
        return this.books;
    }

    findById(id: string): Promise<Book> {
        throw new Error("Method not implemented.");
    }

    async findByTitle(title: string): Promise<Book> {
        return this.books.find(book => book.title == title)
    }

    async create({
        book_url,
        description,
        image_url,
        price,
        title
    }: ICreateBookDTO): Promise<Book> {
        const book = new Book();

        Object.assign(book, {
            book_url,
            description,
            image_url,
            price,
            title
        })

        this.books.push(book)

        return book
    }

    update(data: IUpdateBookDTO): Promise<Book> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<number> {
        throw new Error("Method not implemented.");
    }

}

export { BooksRepositoryInMemory }