export interface PaginationParams {
  _limit: number;
  _page: number;
  _totalRows: number;
}

export type Result = 0 | 1;

export interface Response<T> {
  result: Result;
  data?: T | T[];
  msg?: string;
}

export interface ErrorIF {
  name: string;
  message: string;
}

export interface ListParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: "asc" | "desc";

  [key: string]: any;
}
