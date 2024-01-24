import { User } from "../user/User";

export type Task = {
  completed: boolean;
  createdAt: Date;
  id: string;
  text: string;
  updatedAt: Date;
  user?: User | null;
};
