import { Book } from "../infra/typeorm/entities/Book"

interface IBookRepository {
    find(): Promise<IResponseBookDetailDTO[]>
    findById(id: string): Promise<Book>
    findByTitle(title: string): Promise<Book>
    create(data: ICreateBookDTO): Promise<Book>
    update(data: IUpdateBookDTO): Promise<number>
    delete(id: string): Promise<number>
}

export { IBookRepository }


