import { DeleteFuncionarioService } from './../services/DeleteFuncionarioService';
import { Request, Response } from 'express';

export class DeleteFuncionarioController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteFuncionarioService();

        const result = await service.execute( id );

        // Verificando se resultado = erro.
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        //Retorando status: Sucesso
        return response.status(200).end();
    }
}