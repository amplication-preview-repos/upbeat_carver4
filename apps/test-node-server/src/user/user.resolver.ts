import * as graphql from "@nestjs/graphql";
import { UserService } from "./user.service";

export class UserResolver {
  constructor(protected readonly service: UserService) {}

  @graphql.Query(() => String)
  async GetUser(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.GetUser(args);
  }
}
