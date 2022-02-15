import { hash } from "bcrypt";
import { prismaClient } from "../../../../database/prismaClient";

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    const clientExists = await prismaClient.clients.findFirst({
      where: { 
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    });

    if (clientExists) {
      throw new Error('Client already exists');
    }

    const salt = 10;
    const hashPassword = await hash(password, salt);

    const newCLient = await prismaClient.clients.create({
      data: {
        username,
        password: hashPassword
      }
    });

    return newCLient;
  }
}