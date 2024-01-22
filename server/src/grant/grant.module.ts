import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GrantModuleBase } from "./base/grant.module.base";
import { GrantService } from "./grant.service";
import { GrantController } from "./grant.controller";
import { GrantResolver } from "./grant.resolver";

@Module({
  imports: [GrantModuleBase, forwardRef(() => AuthModule)],
  controllers: [GrantController],
  providers: [GrantService, GrantResolver],
  exports: [GrantService],
})
export class GrantModule {}
