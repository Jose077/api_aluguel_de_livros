import { Column, MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class BooksAddFields1655387254989 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns(
            "livros",
            [
                new TableColumn({
                    name: "author",
                    type: "varchar",
                    default: "'Desconhecido'",
                }),

                new TableColumn({
                    name: "edition",
                    type: "int",
                    default: "1"
                }),

            ]

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("livros", ["author", "edition"])
    }

}
