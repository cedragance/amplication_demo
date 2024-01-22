import { AppRoleListRelationFilter } from "../appRole/AppRoleListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type GrantWhereInput = {
  appRoles?: AppRoleListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
