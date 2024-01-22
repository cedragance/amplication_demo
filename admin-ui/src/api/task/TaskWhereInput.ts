import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TaskWhereInput = {
  completed?: BooleanFilter;
  id?: StringFilter;
  text?: StringFilter;
  uid?: StringNullableFilter;
};
