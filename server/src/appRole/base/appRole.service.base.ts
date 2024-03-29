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
  AppRole, // @ts-ignore
  Grant, // @ts-ignore
  User,
} from "@prisma/client";

export class AppRoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AppRoleCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppRoleCountArgs>
  ): Promise<number> {
    return this.prisma.appRole.count(args);
  }

  async appRoles<T extends Prisma.AppRoleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppRoleFindManyArgs>
  ): Promise<AppRole[]> {
    return this.prisma.appRole.findMany(args);
  }
  async appRole<T extends Prisma.AppRoleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppRoleFindUniqueArgs>
  ): Promise<AppRole | null> {
    return this.prisma.appRole.findUnique(args);
  }
  async createAppRole<T extends Prisma.AppRoleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppRoleCreateArgs>
  ): Promise<AppRole> {
    return this.prisma.appRole.create<T>(args);
  }
  async updateAppRole<T extends Prisma.AppRoleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppRoleUpdateArgs>
  ): Promise<AppRole> {
    return this.prisma.appRole.update<T>(args);
  }
  async deleteAppRole<T extends Prisma.AppRoleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppRoleDeleteArgs>
  ): Promise<AppRole> {
    return this.prisma.appRole.delete(args);
  }

  async findGrants(
    parentId: string,
    args: Prisma.GrantFindManyArgs
  ): Promise<Grant[]> {
    return this.prisma.appRole
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .grants(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.appRole
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .users(args);
  }
}
