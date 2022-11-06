import axios from "axios";
import { AuthService } from "../services/auth.service";

export type ModelResponse<T> = { result: T };

const BASE_URL_API = import.meta.env.VITE_BASE_URL_API || "http://localhost:3001/api/";

export const newModel = (pathname = "") => {
  const auth = AuthService.get();
  const Authorization = auth?.token ? `Bearer ${auth.token}` : "";
  return axios.create({
    baseURL: `${BASE_URL_API}${pathname}`,
    timeout: 1000,
    headers: { Authorization },
  });
};
