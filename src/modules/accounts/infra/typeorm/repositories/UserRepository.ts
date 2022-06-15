import { IUsersRepository } from '@modules/accounts/repositories/IUserRepository';
import { getRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }

    async findByEmail(email: string): Promise<User> {
    
        const user = await this.repository.findOne({ email });

        return user
    }

    

}

export { UsersRepository }