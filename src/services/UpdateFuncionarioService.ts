import { getRepository } from 'typeorm';
import { Funcionario } from '../entities/Funcionario';


type FuncionarioUpdateRequest = {
    id: string;
    nome: string;
    rg: string;
    id_departamento: string;
}


export class UpdateFuncionarioService {
    async execute({id, nome, rg, id_departamento}: FuncionarioUpdateRequest) {
        const repo = getRepository(Funcionario);

        const funcionario = await repo.findOne(id);

        console.log(funcionario);

         // Condição para verificar se o Departamendo informado realmente existe:
         if (!funcionario) {
            return new Error("Funcionario não encontrado.");
        }

        //Atribuindo os novos valores aos campos com if ternário
        funcionario.nome = nome ? nome: funcionario.nome;
        funcionario.rg = rg ? rg: funcionario.rg;

        // Salvando as atualizações no banco de dados
        await repo.save(funcionario);

        return funcionario;
    
    }
}