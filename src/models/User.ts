export interface RegisterPayLoad {
  user_name: string;
  full_name: string;
  email: string;
  password: string;
  phone?: string;
  gender?: boolean;
  birthday?: string;
  avatar?: string;
  address?: string;
}

export interface LoginPayLoad {
  email: string;
  password: string;
}

export interface User extends RegisterPayLoad {
  id?: number;
  status?: string;
  expired_status?: string;
  token: string;
}
