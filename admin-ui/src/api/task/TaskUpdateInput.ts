import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  completed?: boolean;
  text?: string;
  user?: UserWhereUniqueInput | null;
};
