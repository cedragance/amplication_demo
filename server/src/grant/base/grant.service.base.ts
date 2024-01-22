/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Grant, // @ts-ignore
  AppRole,
} from "@prisma/client";

export class GrantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GrantCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.GrantCountArgs>
  ): Promise<number> {
    return this.prisma.grant.count(args);
  }

  async grants<T extends Prisma.GrantFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GrantFindManyArgs>
  ): Promise<Grant[]> {
    return this.prisma.grant.findMany(args);
  }
  async grant<T extends Prisma.GrantFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GrantFindUniqueArgs>
  ): Promise<Grant | null> {
    return this.prisma.grant.findUnique(args);
  }
  async createGrant<T extends Prisma.GrantCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GrantCreateArgs>
  ): Promise<Grant> {
    return this.prisma.grant.create<T>(args);
  }
  async updateGrant<T extends Prisma.GrantUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GrantUpdateArgs>
  ): Promise<Grant> {
    return this.prisma.grant.update<T>(args);
  }
  async deleteGrant<T extends Prisma.GrantDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GrantDeleteArgs>
  ): Promise<Grant> {
    return this.prisma.grant.delete(args);
  }

  async findAppRole(
    parentId: string,
    args: Prisma.AppRoleFindManyArgs
  ): Promise<AppRole[]> {
    return this.prisma.grant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .appRole(args);
  }
}
