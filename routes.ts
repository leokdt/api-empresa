import { UpdateFuncionarioController } from './src/controllers/UpdateFuncionarioController';
import { DeleteFuncionarioController } from './src/controllers/DeleteFuncionarioController';
import { GetAllFuncionariosController } from './src/controllers/GetAllFuncionariosController';
import { CreateFuncionarioController } from './src/controllers/CreateFuncionarioController';
import { UpdateDptoController } from './src/controllers/UpdateDptoController';
import { DeleteDptoController } from './src/controllers/DeleteDptoController';
import { GetAllDptosController } from './src/controllers/GetAllDptosController';
import { CreateDptoController } from './src/controllers/CreateDptoController';
import { Router } from "express";

const routes = Router();

// Criar Departamento
routes.post("/departamentos", new CreateDptoController().handle);

// Adicionar Funcionario
routes.post("/adicionar-funcionario", new CreateFuncionarioController().handle);

//Listar todos os Funcionarios
routes.get("/funcionarios", new GetAllFuncionariosController().handle);

// Listar Departamentos
routes.get("/departamentos", new GetAllDptosController().handle);

//Excluir Funcionario
routes.delete("/funcionarios/:id", new DeleteFuncionarioController().handle);

// Excluir Departamento
routes.delete("/departamentos/:id", new DeleteDptoController().handle);

// Atualizar Departamento
routes.put("/departamentos/:id", new UpdateDptoController().handle);

// Atualizar dados do Funcionario
routes.put("/funcionarios/:id", new UpdateFuncionarioController().handle);

export { routes };