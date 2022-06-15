import { AppError } from "@shared/errors/AppError";
import { UserRepositoryInMemory } from "../repositories/in-memory/UserRepositoryInMemory";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Auth user", () => {

    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(userRepositoryInMemory)
    })

    it("shold be able to authenticate an user", async () => {

        // Foi adicionado um usuario manualmente no array(db fake) de user no repositorio in-memory com esses dados
        const userMock = {
            email: "userteste@email.com",
            password: "user123",
        }

        const result = await authenticateUserUseCase.execute({
            email: userMock.email,
            password: userMock.password
        })

        expect(result).toHaveProperty("token")
        
    })

    it("shold not be able to authenticate an nonexistent user", async () => {
        await expect(authenticateUserUseCase.execute({
            password: "87654321",
            email: "inexistentUser@email.com"
        })).rejects.toEqual(new AppError("Email or password incorrect!"))
    })

    it("shold not be able to authenticate with incorrect password", async () => {
        const userMock = {
            email: "userteste@email.com",
            password: "passwordIncorrect", //correct: "user123"
        }

        await expect(authenticateUserUseCase.execute({
            email: userMock.email,
            password: userMock.password
        })).rejects.toEqual(new AppError("Email or password incorrect!"))
    })
})