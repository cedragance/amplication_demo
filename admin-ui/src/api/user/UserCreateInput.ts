import { AppRoleCreateNestedManyWithoutUsersInput } from "./AppRoleCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TaskCreateNestedManyWithoutUsersInput } from "./TaskCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  appRoles?: AppRoleCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  tasks?: TaskCreateNestedManyWithoutUsersInput;
  username: string;
};
