import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  constructor() {}
  async GetUser(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
