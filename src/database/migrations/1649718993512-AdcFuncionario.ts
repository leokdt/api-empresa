import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AdcFuncionario1649718993512 implements MigrationInterface {

    // Comando para inserir uma tabela(run)
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: "funcionario",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "rg",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "id_departamento",
                        type: "uuid"
                    }
                ],
            // Relacionamento entre as tabelas "departamento" e "funcionario"
                foreignKeys: [
                    {
                        name: "fk_id_dpto",
                        columnNames: ["id_departamento"],
                        referencedTableName: "departamento",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    // Comando para excluir a tabela (revert)
    public async down(queryRunner: QueryRunner): Promise<any> {
       await queryRunner.dropTable("funcionario"); 
    }
}