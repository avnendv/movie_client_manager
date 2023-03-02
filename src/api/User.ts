import { RegisterPayLoad, LoginPayLoad, User, Response } from "../models";
import axiosClient from "./Base";

const UserApi = {
  register(data: RegisterPayLoad): Promise<Response<User>> {
    const url = "/register";
    return axiosClient.post(url, data);
  },
  login(data: LoginPayLoad): Promise<Response<User>> {
    const url = "/login";
    return axiosClient.post(url, data);
  },
};

export default UserApi;
