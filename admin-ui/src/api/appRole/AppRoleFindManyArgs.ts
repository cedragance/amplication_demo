import { AppRoleWhereInput } from "./AppRoleWhereInput";
import { AppRoleOrderByInput } from "./AppRoleOrderByInput";

export type AppRoleFindManyArgs = {
  where?: AppRoleWhereInput;
  orderBy?: Array<AppRoleOrderByInput>;
  skip?: number;
  take?: number;
};
