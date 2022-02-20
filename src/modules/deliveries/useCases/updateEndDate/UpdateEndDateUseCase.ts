import { Deliveries } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";

interface IUpdateDeliveryEndDate {
  id_deliveryman: string;
  id_delivery: string;
}

export class UpdateEndDateUseCase {
  async execute({ id_deliveryman, id_delivery }: IUpdateDeliveryEndDate) {

    const delivery = await prismaClient.deliveries.findFirst({
      where: { id: id_delivery }
    });

    if (!delivery) {
      throw new Error('Delivery not found');
    }

    const updatedDelivery = await prismaClient.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman
      },
      data: {
        end_at: new Date(),
      }
    });

    return updatedDelivery;
  }
}