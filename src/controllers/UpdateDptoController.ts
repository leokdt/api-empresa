import { UpdateDptoService } from './../services/UpdateDptoService';
import { Request, Response } from "express";



export class UpdateDptoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { nome, sigla } = request.body;

        //Realizando chamada ao serviço de Update
        const service = new UpdateDptoService();

        // Atribuindo resultado a execução do serviço
        const result = await service.execute({id, nome, sigla});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);

    }
}