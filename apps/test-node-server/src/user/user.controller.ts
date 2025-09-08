import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserService } from "./user.service";

@swagger.ApiTags("users")
@common.Controller("users")
export class UserController {
  constructor(protected readonly service: UserService) {}

  @common.Get("/:id/get-user")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUser(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetUser(body);
      }
}
