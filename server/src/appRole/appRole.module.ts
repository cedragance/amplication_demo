import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AppRoleModuleBase } from "./base/appRole.module.base";
import { AppRoleService } from "./appRole.service";
import { AppRoleController } from "./appRole.controller";
import { AppRoleResolver } from "./appRole.resolver";

@Module({
  imports: [AppRoleModuleBase, forwardRef(() => AuthModule)],
  controllers: [AppRoleController],
  providers: [AppRoleService, AppRoleResolver],
  exports: [AppRoleService],
})
export class AppRoleModule {}
