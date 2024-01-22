import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AppRoleService } from "./appRole.service";
import { AppRoleControllerBase } from "./base/appRole.controller.base";

@swagger.ApiTags("appRoles")
@common.Controller("appRoles")
export class AppRoleController extends AppRoleControllerBase {
  constructor(
    protected readonly service: AppRoleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
