import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GrantServiceBase } from "./base/grant.service.base";

@Injectable()
export class GrantService extends GrantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
