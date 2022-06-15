import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"


@Entity("livros")
class User {

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

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }

}

export { User }