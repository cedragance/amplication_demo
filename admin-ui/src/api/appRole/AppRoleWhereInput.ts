import { GrantListRelationFilter } from "../grant/GrantListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type AppRoleWhereInput = {
  grants?: GrantListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  users?: UserListRelationFilter;
};
