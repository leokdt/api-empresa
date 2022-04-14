import { getRepository } from 'typeorm';
import { Departamento } from '../entities/Departamento';


export class DeleteDptoService {

    async execute(id: string) {
        // Criando a camada para comunicação com o banco de dados
        const repo = getRepository(Departamento);

        //Verificando se o Departamento informado realmente existe:
        if(!(await repo.findOne(id))) {
            return new Error("Departamento não cadastrado.");
        }

        //Deletando Departamento pelo ID
        await repo.delete(id);

    }
}