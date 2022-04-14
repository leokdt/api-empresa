import { Request, Response } from 'express';
import { CreateDptoService } from '../services/CreateDptoService';

export class CreateDptoController {
    async handle(request: Request, response: Response) {
        const { nome, sigla } = request.body;

        const service = new CreateDptoService();

        const result = await service.execute({ nome, sigla });

        // Verificando se resulta = erro.
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}