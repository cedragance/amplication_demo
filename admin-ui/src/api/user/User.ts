import { AppRole } from "../appRole/AppRole";
import { JsonValue } from "type-fest";
import { Task } from "../task/Task";

export type User = {
  appRoles?: Array<AppRole>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tasks?: Array<Task>;
  updatedAt: Date;
  username: string;
};
