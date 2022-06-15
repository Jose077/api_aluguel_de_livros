import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Livros1655334684717 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "livros",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, 
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "image_url",
                        type: "varchar"
                    },
                    {
                        name: "book_url",
                        type: "varchar"
                    },
                    {
                        name: "price",
                        type: "int"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }

                ]
            }),

            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("livros");
    }

}
