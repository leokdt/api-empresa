import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDpto1649716961831 implements MigrationInterface {

    // Comando para inserir uma tabela(run)
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: "departamento",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "sigla",
                        type: "varchar"
                    }
                ]
           })
        )
    }

    // Comando para excluir a tabela (revert)
    public async down(queryRunner: QueryRunner): Promise<any> {
       await queryRunner.dropTable("departamento"); 
    }

}
