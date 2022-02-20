import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { prismaClient } from "../../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman): Promise<string> {
    const deliveryman = await prismaClient.deliveryman.findFirst({
      where: {
        username
      }
    });

    if (!deliveryman) {
      throw new Error('User or password invalid');
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if(!passwordMatch) {
      throw new Error('User or password invalid');
    }

    const payload = {
      username
    }

    const token = sign(payload, 'secretDeliveryman', {
      subject: deliveryman.id,
      expiresIn: '1d',
    });

    return token;
  }
}