import { Grant } from "../grant/Grant";
import { User } from "../user/User";

export type AppRole = {
  createdAt: Date;
  grants?: Array<Grant>;
  id: string;
  name: string;
  updatedAt: Date;
  users?: Array<User>;
};
