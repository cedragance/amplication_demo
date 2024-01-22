import { AppRoleCreateNestedManyWithoutGrantsInput } from "./AppRoleCreateNestedManyWithoutGrantsInput";

export type GrantCreateInput = {
  appRole?: AppRoleCreateNestedManyWithoutGrantsInput;
  name: string;
};
