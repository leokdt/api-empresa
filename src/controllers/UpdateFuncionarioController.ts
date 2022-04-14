import { UpdateFuncionarioService } from './../services/UpdateFuncionarioService';
import { Request, Response } from "express";

export class UpdateFuncionarioController {
    async handle(request: Request, response: Response) {
        const { id, id_departamento } = request.params;
        const { nome, rg } = request.body;

        //Realizando chamada ao serviço de Update
        const service = new UpdateFuncionarioService();

        // Atribuindo resultado a execução do serviço
        const result = await service.execute({id, nome, rg, id_departamento});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);

    }
}