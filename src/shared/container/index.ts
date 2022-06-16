import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UserRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUserRepository";
import { BooksRepository } from "@modules/books/infra/typeorm/repositories/BooksRepository";
import { IBookRepository } from "@modules/books/repositories/IBookRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)

container.registerSingleton<IBookRepository>(
    "BooksRepository",
    BooksRepository
)

