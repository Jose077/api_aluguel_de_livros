import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "../IUserRepository";



class UserRepositoryInMemory implements IUsersRepository {

    users: User[] = [
        {
            id: "0a17429b-7be1-41a0-bf22-b06e91acd5c5",
            name: "user teste",
            email: "userteste@email.com",
            password: "$2b$08$tW3w3uhtbjUxWsY7Nt8QtOXjkxtkXSAeK0mnnTLuEe1MkDT02h3j6",
            created_at: new Date("2022-06-15 00:02:47.012952")
        }
    ]

    async findByEmail(email: string): Promise<User> {
        return this.users.find(user => user.email === email);
    }

}

export { UserRepositoryInMemory }