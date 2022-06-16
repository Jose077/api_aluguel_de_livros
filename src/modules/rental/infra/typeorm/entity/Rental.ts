import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm"

@Entity("alugueis")
class Rental {

    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @Column()
    book_id: string;

    @Column()
    price: number;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    return_date: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }

}

export { Rental }