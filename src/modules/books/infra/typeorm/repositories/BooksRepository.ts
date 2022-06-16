import { IBookRepository } from "@modules/books/repositories/IBookRepository";
import { getRepository, Repository } from "typeorm";
import { Book } from "../entities/Book";


class BooksRepository implements IBookRepository {

    private repository: Repository<Book>;

    constructor() {
        this.repository = getRepository(Book)
    }

    async find(): Promise<Book[]> {
        return await this.repository.find();
    }

    async findByTitle(title: string): Promise<Book> {

        return await this.repository.findOne({title})
    }

    async findById(id: string): Promise<Book> {
        return await this.repository.findOne({id})
    }

    async create({
        book_url,
        description,
        image_url,
        price,
        title,
        id,
        author,
        edition
    }: ICreateBookDTO): Promise<Book> {

        const book = this.repository.create({
            book_url,
            description,
            image_url,
            price,
            title,
            id,
            author,
            edition
        });

        await this.repository.save(book);

        return book;
    }

    async update({
        book_url,
        description,
        image_url,
        price,
        title,
        id,
        author,
        edition
    }: IUpdateBookDTO): Promise<number> {
        const book = this.repository.create({
            book_url,
            description,
            image_url,
            price,
            title,
            id,
            author,
            edition
        });

        const result = await this.repository.createQueryBuilder().update(Book).set(book).execute();

        return result.affected;
    }

    async delete(id: string): Promise<number> {
         const result = await this.repository.delete(id);

         return result.affected
    }

}

export { BooksRepository }