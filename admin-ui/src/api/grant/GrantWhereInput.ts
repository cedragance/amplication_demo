import { AppRoleListRelationFilter } from "../appRole/AppRoleListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type GrantWhereInput = {
  appRole?: AppRoleListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
