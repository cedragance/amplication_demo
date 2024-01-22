import { GrantWhereInput } from "./GrantWhereInput";
import { GrantOrderByInput } from "./GrantOrderByInput";

export type GrantFindManyArgs = {
  where?: GrantWhereInput;
  orderBy?: Array<GrantOrderByInput>;
  skip?: number;
  take?: number;
};
