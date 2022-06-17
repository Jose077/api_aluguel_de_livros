import { IBookRepository } from "@modules/books/repositories/IBookRepository";
import { getRepository, Repository } from "typeorm";
import { Book } from "../entities/Book";

class BooksRepository implements IBookRepository {

    private repository: Repository<Book>;

    constructor() {
        this.repository = getRepository(Book)
    }


    async find({
            available, 
            title = '', 
            author = '',
            initial_price,
            final_price
    }: IParamsFindBooks): Promise<IResponseBookDetailDTO[]> {

        const initi_p = initial_price || null;
        const fin_p = final_price || null;
        const available_out = available || null; 

        return await this.repository.query(`
            SELECT
                id,
                title,
                price,
                author,
                edition,
                available
            FROM livros l
            WHERE
                CASE 
                    WHEN  ${available_out} IS NULL THEN TRUE
                    ELSE l.available = ${available_out}
                END
                AND
                CASE
                    WHEN '${title}' = '' THEN TRUE
                    ELSE l.title ILIKE '%${title}%'
                END
                AND
                CASE
                    WHEN '${author}' = '' THEN TRUE
                    ELSE l.author ILIKE '%${author}%'
                END
                AND
                              CASE
                    WHEN '${author}' = '' THEN TRUE
                    ELSE l.author ILIKE '%${author}%'
                END
                AND
                CASE
                    WHEN (${initi_p} IS NULL) OR (${fin_p} IS NULL) THEN TRUE
                    ELSE l.price <= ${fin_p} AND l.price >= ${initi_p}
                END


        `)
    }

    async findByTitle(title: string): Promise<Book> {

        return await this.repository.findOne({ title })
    }

    async findById(id: string): Promise<Book> {
        return await this.repository.findOne({ id })
    }

    async create({
        book_url,
        description,
        image_url,
        price,
        title,
        id,
        author,
        edition,
        available
    }: ICreateBookDTO): Promise<Book> {

        const book = this.repository.create({
            book_url,
            description,
            image_url,
            price,
            title,
            id,
            author,
            edition,
            available
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
        edition,
        available
    }: IUpdateBookDTO): Promise<number> {
        const book = this.repository.create({
            book_url,
            description,
            image_url,
            price,
            title,
            id,
            author,
            edition,
            available
        });

        const result = await this.repository.createQueryBuilder().update(Book).where("id = :id", { id }).set(book).execute();

        return result.affected;
    }

    async delete(id: string): Promise<number> {
        const result = await this.repository.delete(id);

        return result.affected
    }

}

export { BooksRepository }