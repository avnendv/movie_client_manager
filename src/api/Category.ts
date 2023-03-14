import { ListParams } from "../models";
import axiosClient from "./Base";

const URL = "/category";

const CategoryApi = {
  list(params: ListParams) {
    const url = URL;
    return axiosClient.get(url, { params });
  },
  show(id: number) {
    const url = `${URL}/${id}`;
    return axiosClient.get(url);
  },
  store(data: any) {
    const url = `${URL}/store`;
    return axiosClient.post(url, data);
  },
  update(id: number, data: any) {
    const url = `${URL}/${id}/update`;
    return axiosClient.put(url, data);
  },
  destroy(id: number) {
    const url = `${URL}/${id}/destroy`;
    return axiosClient.delete(url);
  },
  restore(id: number) {
    const url = `${URL}/${id}/restore`;
    return axiosClient.get(url);
  },
};

export default CategoryApi;
