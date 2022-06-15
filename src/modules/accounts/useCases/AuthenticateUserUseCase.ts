
require('dotenv/config');
import { AppError } from "@shared/errors/AppError";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUserRepository";

interface IRequest {
    email: string;
    password: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ){}

    async execute({email, password}: IRequest) {
        const user = await this.usersRepository.findByEmail(email)

        if(!user){
            throw new AppError("Email or password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);
        if(!passwordMatch) {
            throw new Error("Email or password incorrect!");
        }

        const token = sign({}, process.env.SECRET_TOKEN, { subject: user.id, expiresIn: process.env.EXPIRES_IN });

        return token

    }
}

export { AuthenticateUserUseCase }