import { Deliveries } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";

export class FindAllAvailableUseCase {
  async execute(): Promise<Deliveries[]> {
    return prismaClient.deliveries.findMany({
      where: {
        id_deliveryman: null,
        end_at: null
      }
    })
  }
}