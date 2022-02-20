import { Deliveries } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";

interface IUpdateDelivery {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateDelivery): Promise<Deliveries> {

    const delivery = await prismaClient.deliveries.findFirst({
      where: { id: id_delivery }
    });

    if (!delivery) {
      throw new Error('Delivery not found');
    }

    const updatedDelivery = await prismaClient.deliveries.update({
      where: { 
        id: id_delivery
      },
      data: {
        id_deliveryman
      }
    });

    return updatedDelivery;
  }
}