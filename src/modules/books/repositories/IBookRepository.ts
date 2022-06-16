import { Book } from "../infra/typeorm/entities/Book"

interface IBookRepository {
    find(): Promise<Book[]>
    findById(id: string): Promise<Book>
    create(data: ICreateBookDTO): Promise<Book>
    update(data: IUpdateBookDTO): Promise<Book>
    delete(id: string): Promise<number>
}

export { IBookRepository }


