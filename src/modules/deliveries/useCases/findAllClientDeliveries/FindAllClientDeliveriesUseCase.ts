import { Clients, Deliveries } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";


interface IClientDeliveriesResponse {
  id: string;
  deliveries: Deliveries[];
  username: string;
}

export class FindAllClientDeliveriesUseCase {
  async execute(id_client: string,): Promise<IClientDeliveriesResponse[]> {
    return prismaClient.clients.findMany({
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