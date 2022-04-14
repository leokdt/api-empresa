import { getRepository } from 'typeorm';
import { Funcionario } from '../entities/Funcionario';



export class DeleteFuncionarioService {
    async execute(id: string) {
        
        const repo = getRepository(Funcionario);

        //Verificando se o Funcionario informado realmente existe:
        if(!(await repo.findOne(id))) {
            return new Error("Funcionario não cadastrado.");
        }

        //Deletando Funcionario pelo ID
        await repo.delete(id);
    } 
}