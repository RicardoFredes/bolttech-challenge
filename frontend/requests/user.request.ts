import { AuthService } from "../services/auth.service";
import { newModel } from "./model.request";

export interface LoginDTO {
  email: string;
  password: string;
}

export interface RegisterUserDTO {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  token: string;
}

interface RegisterUserResponse {
  result: UserResponse;
}

export const registerUser = async (data: RegisterUserDTO) => {
  try {
    const response = await newModel().post<RegisterUserResponse>("/register", data);
    const { result } = response.data;
    AuthService.set(result);
    return response.data.result;
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};

export const login = async (data: LoginDTO) => {
  try {
    const response = await newModel().post<RegisterUserResponse>("/login", data);
    const { result } = response.data;
    AuthService.set(result);
    return response.data.result;
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};
