import { Request, Response } from "express";
import { GetAllDptosService } from "../services/GetAllDptosService";



export class GetAllDptosController {
    async handle(request: Request, response: Response) {
        const service = new GetAllDptosService();

        const departamento = await service.execute();
        
        return response.json(departamento);
    }
}