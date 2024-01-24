import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  completed: boolean;
  text: string;
  user?: UserWhereUniqueInput | null;
};
