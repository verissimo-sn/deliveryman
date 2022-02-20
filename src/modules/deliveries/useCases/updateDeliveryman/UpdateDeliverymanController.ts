import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

export class UpdateDeliverymanController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id: id_delivery } = req.params
    const { id_deliveryman } = req;

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();
    const result = await updateDeliverymanUseCase.execute({ id_deliveryman, id_delivery });

    return res.json(result);
  }
}