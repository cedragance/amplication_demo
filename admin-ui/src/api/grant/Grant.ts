import { AppRole } from "../appRole/AppRole";

export type Grant = {
  appRole?: Array<AppRole>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};