import { DeleteDptoService } from './../services/DeleteDptoService';
import { Request, Response } from 'express';

export class DeleteDptoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteDptoService();

        const result = await service.execute( id );

        // Verificando se resultado = erro.
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        //Retorando status: Sucesso
        return response.status(200).end();
    }
}