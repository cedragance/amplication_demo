import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  completed?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
