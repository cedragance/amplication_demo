import { GrantCreateNestedManyWithoutAppRolesInput } from "./GrantCreateNestedManyWithoutAppRolesInput";
import { UserCreateNestedManyWithoutAppRolesInput } from "./UserCreateNestedManyWithoutAppRolesInput";

export type AppRoleCreateInput = {
  grants?: GrantCreateNestedManyWithoutAppRolesInput;
  name: string;
  users?: UserCreateNestedManyWithoutAppRolesInput;
};
