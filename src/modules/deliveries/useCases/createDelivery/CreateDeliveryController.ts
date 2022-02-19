import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

export class CreateDeliveryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_client, item_name } = req.body;

    const createDeliveryUseCase = new CreateDeliveryUseCase();
    const result = await createDeliveryUseCase.execute({ id_client, item_name});

    return res.status(201).json(result);
  }
}