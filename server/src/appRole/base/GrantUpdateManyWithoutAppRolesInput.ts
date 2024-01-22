/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { GrantWhereUniqueInput } from "../../grant/base/GrantWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class GrantUpdateManyWithoutAppRolesInput {
  @Field(() => [GrantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GrantWhereUniqueInput],
  })
  connect?: Array<GrantWhereUniqueInput>;

  @Field(() => [GrantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GrantWhereUniqueInput],
  })
  disconnect?: Array<GrantWhereUniqueInput>;

  @Field(() => [GrantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GrantWhereUniqueInput],
  })
  set?: Array<GrantWhereUniqueInput>;
}

export { GrantUpdateManyWithoutAppRolesInput as GrantUpdateManyWithoutAppRolesInput };
