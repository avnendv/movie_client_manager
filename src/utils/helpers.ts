import { Category } from "../models";

export const getCategoryParentName = (id: number = 0, data: Category[]) => {
  return data
    .filter((data) => data.id === id)
    .map((data) => data.name)
    .join("");
};
