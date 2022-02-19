import { Deliveries } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";

interface ICreateDelivery {
  item_name: string;
  id_client: string;
}

export class CreateDeliveryUseCase {
  async execute({ id_client, item_name }:ICreateDelivery): Promise<Deliveries> {
    return prismaClient.deliveries.create({
      data: { 
        id_client,
        item_name,
      }
    });
  }
}