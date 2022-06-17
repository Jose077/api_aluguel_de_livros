import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class BooksAddFieldAvailable1655424889041 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns(
            "livros",
            [
                new TableColumn({
                    name: "available",
                    type: "boolean",
                    default: true,
                })

            ]

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("livros", "author")
    }

}
