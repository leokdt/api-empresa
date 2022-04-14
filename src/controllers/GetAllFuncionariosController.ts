import { Request, Response } from "express";
import { GetAllFuncionariosService } from "../services/GetAllFuncionariosService";



export class GetAllFuncionariosController {
    async handle(request: Request, response: Response) {
        const service = new GetAllFuncionariosService();

        const funcionarios = await service.execute();

        return response.json(funcionarios);
    }
}