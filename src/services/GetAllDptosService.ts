import { getRepository } from 'typeorm';
import { Departamento } from '../entities/Departamento';



export class GetAllDptosService {
    async execute() {
        const repo = getRepository(Departamento);

        const departamento = await repo.find();

        return departamento;
    }
}