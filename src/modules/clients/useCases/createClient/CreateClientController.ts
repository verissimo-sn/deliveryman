import { Request, Response } from "express";
import { CreateClientUseCase } from "./createClientUseCase";

export class CreateClientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body

    const createClientUseCase = new CreateClientUseCase();
    const newClient = await createClientUseCase.execute({ username, password });

    return res.status(201).json(newClient);
  }
}