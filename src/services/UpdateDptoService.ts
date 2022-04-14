import { Departamento } from './../entities/Departamento';
import { getRepository } from 'typeorm';


// Recebendo os dados do Departamento a ser atualizado:
type DptoUpdateRequest = {
    id: string;
    nome: string;
    sigla: string;
}

export class UpdateDptoService {
    async execute({id, nome, sigla}: DptoUpdateRequest) {
        const repo = getRepository(Departamento);

        const departamento = await repo.findOne(id);

        console.log(departamento);

        // Condição para verificar se o Departamendo informado realmente existe:
        if (!departamento) {
            return new Error("Departamento não encontrado.");
        }

        //Atribuindo os novos valores aos campos com if ternário
        departamento.nome = nome ? nome: departamento.nome;
        departamento.sigla = sigla ? sigla: departamento.sigla;

        // Salvando as atualizações no banco de dados
        await repo.save(departamento);

        return departamento;
    }
}