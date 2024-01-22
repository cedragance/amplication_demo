import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppRoleServiceBase } from "./base/appRole.service.base";

@Injectable()
export class AppRoleService extends AppRoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
