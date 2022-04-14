import { Departamento } from './../entities/Departamento';
import { Funcionario } from './../entities/Funcionario';
import { getRepository } from 'typeorm';


type FuncionarioRequest = {
    nome: string;
    rg: string;
    id_departamento: string;
}

export class CreateFuncionarioService {
    async execute({nome, rg, id_departamento}: FuncionarioRequest): Promise<Funcionario | Error> {
    
    const repo = getRepository(Funcionario);

    const repoDepartamento = getRepository(Departamento);

    if(!await repoDepartamento.findOne(id_departamento)) {
        return new Error("Departamento não foi encontrado.")
    }

    const funcionario = repo.create({nome, rg, id_departamento});

    await repo.save(funcionario);

    return funcionario;

  }

}