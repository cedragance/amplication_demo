import { Grant as TGrant } from "../api/grant/Grant";

export const GRANT_TITLE_FIELD = "id";

export const GrantTitle = (record: TGrant): string => {
  return record.id?.toString() || String(record.id);
};
