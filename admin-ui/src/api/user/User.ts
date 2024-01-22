import { AppRole } from "../appRole/AppRole";
import { JsonValue } from "type-fest";

export type User = {
  appRoles?: Array<AppRole>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
