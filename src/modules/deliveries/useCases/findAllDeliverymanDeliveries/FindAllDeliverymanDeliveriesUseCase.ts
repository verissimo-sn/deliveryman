import { Deliveries, Deliveryman } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";

interface IResponse {
  deliveries: Deliveries[];
  id: string;
  username: string;
}

export class FindAllDeliverymanDeliveriesUseCase {
  async execute(id_deliveryman: string): Promise<IResponse | null> {
    return prismaClient.deliveryman.findFirst({
      where: {
        id: id_deliveryman
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });
  }
}