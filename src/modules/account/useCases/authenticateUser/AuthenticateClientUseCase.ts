import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { prismaClient } from "../../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient): Promise<string> {
    const client = await prismaClient.clients.findFirst({
      where: {
        username
      }
    });

    if (!client) {
      throw new Error('User or password invalid');
    }

    const passwordMatch = await compare(password, client.password);

    if(!passwordMatch) {
      throw new Error('User or password invalid');
    }

    const payload = {
      username
    }

    const token = sign(payload, 'secret', {
      subject: client.id,
      expiresIn: '1d',
    });

    return token;
  }
}