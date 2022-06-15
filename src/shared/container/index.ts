import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UserRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUserRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)