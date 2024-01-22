/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Grant } from "./Grant";
import { GrantCountArgs } from "./GrantCountArgs";
import { GrantFindManyArgs } from "./GrantFindManyArgs";
import { GrantFindUniqueArgs } from "./GrantFindUniqueArgs";
import { CreateGrantArgs } from "./CreateGrantArgs";
import { UpdateGrantArgs } from "./UpdateGrantArgs";
import { DeleteGrantArgs } from "./DeleteGrantArgs";
import { AppRoleFindManyArgs } from "../../appRole/base/AppRoleFindManyArgs";
import { AppRole } from "../../appRole/base/AppRole";
import { GrantService } from "../grant.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Grant)
export class GrantResolverBase {
  constructor(
    protected readonly service: GrantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Grant",
    action: "read",
    possession: "any",
  })
  async _grantsMeta(
    @graphql.Args() args: GrantCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Grant])
  @nestAccessControl.UseRoles({
    resource: "Grant",
    action: "read",
    possession: "any",
  })
  async grants(@graphql.Args() args: GrantFindManyArgs): Promise<Grant[]> {
    return this.service.grants(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Grant, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Grant",
    action: "read",
    possession: "own",
  })
  async grant(
    @graphql.Args() args: GrantFindUniqueArgs
  ): Promise<Grant | null> {
    const result = await this.service.grant(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Grant)
  @nestAccessControl.UseRoles({
    resource: "Grant",
    action: "create",
    possession: "any",
  })
  async createGrant(@graphql.Args() args: CreateGrantArgs): Promise<Grant> {
    return await this.service.createGrant({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Grant)
  @nestAccessControl.UseRoles({
    resource: "Grant",
    action: "update",
    possession: "any",
  })
  async updateGrant(
    @graphql.Args() args: UpdateGrantArgs
  ): Promise<Grant | null> {
    try {
      return await this.service.updateGrant({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Grant)
  @nestAccessControl.UseRoles({
    resource: "Grant",
    action: "delete",
    possession: "any",
  })
  async deleteGrant(
    @graphql.Args() args: DeleteGrantArgs
  ): Promise<Grant | null> {
    try {
      return await this.service.deleteGrant(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [AppRole], { name: "appRoles" })
  @nestAccessControl.UseRoles({
    resource: "AppRole",
    action: "read",
    possession: "any",
  })
  async findAppRoles(
    @graphql.Parent() parent: Grant,
    @graphql.Args() args: AppRoleFindManyArgs
  ): Promise<AppRole[]> {
    const results = await this.service.findAppRoles(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
