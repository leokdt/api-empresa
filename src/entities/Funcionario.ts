import { Departamento } from './Departamento';
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";

// Referenciando a tabela:
@Entity("funcionario")
export class Funcionario {
    
    //Referenciando as colunas:
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    rg: string;

    @Column()
    id_departamento: string;

    @ManyToOne(() => Departamento)
    @JoinColumn({ name: "id_departamento" })
    departamento: Departamento;

    // Comando para geração de ID, caso não venha preenchido.
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

