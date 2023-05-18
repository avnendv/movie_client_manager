import { Category, ListParams, Response } from "@/models";
import axiosClient from "./Base";

const URL = "/category";

const CategoryApi = {
  list(params: ListParams): Promise<Response<Category[]>> {
    const url = URL;
    return axiosClient.get(url, { params });
  },
  show(id: number): Promise<Response<Category>> {
    const url = `${URL}/${id}`;
    return axiosClient.get(url);
  },
  store(data: Category): Promise<Response<Category>> {
    const url = `${URL}/store`;
    return axiosClient.post(url, data);
  },
  update(id: number, data: Category): Promise<Response<Object>> {
    const url = `${URL}/${id}/update`;
    return axiosClient.put(url, data);
  },
  destroy(id: number): Promise<Response<Object>> {
    const url = `${URL}/${id}/destroy`;
    return axiosClient.delete(url);
  },
  restore(id: number): Promise<Response<Object>> {
    const url = `${URL}/${id}/restore`;
    return axiosClient.get(url);
  },
};

export default CategoryApi;
