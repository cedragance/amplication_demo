import { GrantUpdateManyWithoutAppRolesInput } from "./GrantUpdateManyWithoutAppRolesInput";
import { UserUpdateManyWithoutAppRolesInput } from "./UserUpdateManyWithoutAppRolesInput";

export type AppRoleUpdateInput = {
  grants?: GrantUpdateManyWithoutAppRolesInput;
  name?: string;
  users?: UserUpdateManyWithoutAppRolesInput;
};
