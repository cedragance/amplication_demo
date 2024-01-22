export type Task = {
  completed: boolean;
  createdAt: Date;
  id: string;
  text: string;
  uid: string | null;
  updatedAt: Date;
};
