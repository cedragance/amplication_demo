import { AppRoleListRelationFilter } from "../appRole/AppRoleListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type UserWhereInput = {
  appRoles?: AppRoleListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
  username?: StringFilter;
};
