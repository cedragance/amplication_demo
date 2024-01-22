import { AppRoleCreateNestedManyWithoutGrantsInput } from "./AppRoleCreateNestedManyWithoutGrantsInput";

export type GrantCreateInput = {
  appRoles?: AppRoleCreateNestedManyWithoutGrantsInput;
  name: string;
};
