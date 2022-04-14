import { getRepository } from 'typeorm';
import { Funcionario } from '../entities/Funcionario';



export class GetAllFuncionariosService {
    async execute() {
        const repo = getRepository(Funcionario);

        const funcionarios = await repo.find({
            relations: ['departamento']
        });

        return funcionarios;

    }
}