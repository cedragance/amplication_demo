/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppRoleCreateNestedManyWithoutGrantsInput } from "./AppRoleCreateNestedManyWithoutGrantsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GrantCreateInput {
  @ApiProperty({
    required: true,
    type: () => AppRoleCreateNestedManyWithoutGrantsInput,
  })
  @ValidateNested()
  @Type(() => AppRoleCreateNestedManyWithoutGrantsInput)
  @IsOptional()
  @Field(() => AppRoleCreateNestedManyWithoutGrantsInput, {
    nullable: true,
  })
  appRole?: AppRoleCreateNestedManyWithoutGrantsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;
}

export { GrantCreateInput as GrantCreateInput };
