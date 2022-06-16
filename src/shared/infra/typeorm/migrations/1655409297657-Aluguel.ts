import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Aluguel1655409297657 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "alugueis",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, 
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "book_id",
                        type: "uuid",
                    },
                    {
                        name: "price",
                        type: "float",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "return_date",
                        type: "timestamp",
                        isNullable: true
                    },

                ]
            })
        );

        await queryRunner.createForeignKey(
            "alugueis",
            new TableForeignKey({
                name: "FKUser",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames: ["user_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        );


        await queryRunner.createForeignKey(
            "alugueis",
            new TableForeignKey({
                name: "FKBook",
                referencedTableName: "livros",
                referencedColumnNames: ["id"],
                columnNames: ["book_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("alugueis");
    }

}
