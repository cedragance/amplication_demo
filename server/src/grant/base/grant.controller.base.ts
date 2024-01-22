/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { GrantService } from "../grant.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GrantCreateInput } from "./GrantCreateInput";
import { Grant } from "./Grant";
import { GrantFindManyArgs } from "./GrantFindManyArgs";
import { GrantWhereUniqueInput } from "./GrantWhereUniqueInput";
import { GrantUpdateInput } from "./GrantUpdateInput";
import { AppRoleFindManyArgs } from "../../appRole/base/AppRoleFindManyArgs";
import { AppRole } from "../../appRole/base/AppRole";
import { AppRoleWhereUniqueInput } from "../../appRole/base/AppRoleWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GrantControllerBase {
  constructor(
    protected readonly service: GrantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Grant })
  @nestAccessControl.UseRoles({
    resource: "Grant",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createGrant(@common.Body() data: GrantCreateInput): Promise<Grant> {
    return await this.service.createGrant({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Grant] })
  @ApiNestedQuery(GrantFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Grant",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async grants(@common.Req() request: Request): Promise<Grant[]> {
    const args = plainToClass(GrantFindManyArgs, request.query);
    return this.service.grants({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Grant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Grant",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async grant(
    @common.Param() params: GrantWhereUniqueInput
  ): Promise<Grant | null> {
    const result = await this.service.grant({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Grant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Grant",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateGrant(
    @common.Param() params: GrantWhereUniqueInput,
    @common.Body() data: GrantUpdateInput
  ): Promise<Grant | null> {
    try {
      return await this.service.updateGrant({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Grant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Grant",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGrant(
    @common.Param() params: GrantWhereUniqueInput
  ): Promise<Grant | null> {
    try {
      return await this.service.deleteGrant({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/appRole")
  @ApiNestedQuery(AppRoleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AppRole",
    action: "read",
    possession: "any",
  })
  async findAppRole(
    @common.Req() request: Request,
    @common.Param() params: GrantWhereUniqueInput
  ): Promise<AppRole[]> {
    const query = plainToClass(AppRoleFindManyArgs, request.query);
    const results = await this.service.findAppRole(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/appRole")
  @nestAccessControl.UseRoles({
    resource: "Grant",
    action: "update",
    possession: "any",
  })
  async connectAppRole(
    @common.Param() params: GrantWhereUniqueInput,
    @common.Body() body: AppRoleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appRole: {
        connect: body,
      },
    };
    await this.service.updateGrant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/appRole")
  @nestAccessControl.UseRoles({
    resource: "Grant",
    action: "update",
    possession: "any",
  })
  async updateAppRole(
    @common.Param() params: GrantWhereUniqueInput,
    @common.Body() body: AppRoleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appRole: {
        set: body,
      },
    };
    await this.service.updateGrant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/appRole")
  @nestAccessControl.UseRoles({
    resource: "Grant",
    action: "update",
    possession: "any",
  })
  async disconnectAppRole(
    @common.Param() params: GrantWhereUniqueInput,
    @common.Body() body: AppRoleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appRole: {
        disconnect: body,
      },
    };
    await this.service.updateGrant({
      where: params,
      data,
      select: { id: true },
    });
  }
}
