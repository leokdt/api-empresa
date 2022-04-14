import { Request, Response } from "express";
import { CreateFuncionarioService } from "../services/CreateFuncionarioService";



export class CreateFuncionarioController {
    async handle(request: Request, response: Response) {
        const {nome, rg, id_departamento} = request.body

        const service = new CreateFuncionarioService();

        const result = await service.execute({
            nome,
            rg,
            id_departamento
        });

        // message: Erro 400
        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }
        
        return response.json();
    }
}