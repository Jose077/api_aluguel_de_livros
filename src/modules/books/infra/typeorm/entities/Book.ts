import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm"
// import { User } from "@modules/accounts/infra/typeorm/entities/User";


@Entity("livros")
class Book {

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    image_url: string;

    @Column()
    book_url: string;

    @Column()
    price: number;

    @Column()
    author: string;

    @Column()
    edition: number;

    @Column()
    available: boolean;

    @CreateDateColumn()
    created_at: Date;

    // @ManyToMany(() => User)
    // @JoinTable()
    // users: User[]

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }

}

export { Book }