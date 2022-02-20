import { Clients, Deliveries } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";


interface IResponse {
  id: string;
  deliveries: Deliveries[];
  username: string;
}

export class FindAllClientDeliveriesUseCase {
  async execute(id_client: string,): Promise<IResponse | null> {
    return prismaClient.clients.findFirst({
      where: {
        id: id_client
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });
  }
}