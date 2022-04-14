import { getRepository } from 'typeorm';
import { Departamento } from '../entities/Departamento';


type DepartamentoRequest = {
    nome: string;
    sigla: string;
}

export class CreateDptoService {

    async execute({ nome, sigla }:DepartamentoRequest): Promise<Departamento | Error> {
        // Criando camada para comunicação com o banco de dados
        const repo = getRepository(Departamento);

        //Verificando se já existe Departamento com mesmo nome:
        if(await repo.findOne({nome})) {
            return new Error("Departamento já cadastrado");
        }

        //Criando objeto
        const departamento = repo.create({
            nome,
            sigla
        })

        await repo.save(departamento);

        return departamento;
    }
}