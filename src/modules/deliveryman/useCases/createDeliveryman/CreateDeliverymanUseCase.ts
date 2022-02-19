import { Deliveryman } from "@prisma/client";
import { hash } from "bcrypt";
import { prismaClient } from "../../../../database/prismaClient";

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliveryman): Promise<Deliveryman> {
    const deliverymanExists = await prismaClient.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    });

    if (deliverymanExists) {
      throw new Error('Deliveryman already exists');
    }

    const salt = 10;
    const hashPassword = await hash(password, salt);

    const newDeliveryman = await prismaClient.deliveryman.create({
      data: {
        username,
        password: hashPassword
      }
    });

    return newDeliveryman;
  }
}