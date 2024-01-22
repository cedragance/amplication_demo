import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GrantService } from "./grant.service";
import { GrantControllerBase } from "./base/grant.controller.base";

@swagger.ApiTags("grants")
@common.Controller("grants")
export class GrantController extends GrantControllerBase {
  constructor(
    protected readonly service: GrantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
