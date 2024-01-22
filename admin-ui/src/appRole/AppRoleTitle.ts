import { AppRole as TAppRole } from "../api/appRole/AppRole";

export const APPROLE_TITLE_FIELD = "name";

export const AppRoleTitle = (record: TAppRole): string => {
  return record.name?.toString() || String(record.id);
};
