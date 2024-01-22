import { Grant as TGrant } from "../api/grant/Grant";

export const GRANT_TITLE_FIELD = "name";

export const GrantTitle = (record: TGrant): string => {
  return record.name?.toString() || String(record.id);
};
