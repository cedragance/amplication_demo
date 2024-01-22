import { AppRole } from "../appRole/AppRole";

export type Grant = {
  appRoles?: Array<AppRole>;
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
};
