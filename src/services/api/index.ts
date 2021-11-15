import axios from "axios";
import { getToken } from "../../utils/AsyncStorageToken";
import { baseUrl } from "../urls";

const api = axios.create({
  // IP da minha máquina
  baseURL: baseUrl.httpLocalMachine,
});

const authApi = axios.create({
  baseURL: `${baseUrl.httpLocalMachine}/authenticate`,
});

const generateHeaders = async (ctx: any, contentType = "application/json") => {
  const token = await getToken();
  if (token) ctx.headers.Authorization = `Bearer ${token}`;
  ctx.headers["Content-Type"] = contentType;

  return ctx;
};

//authApi.interceptors.request.use(async (config) => generateHeaders(config));

export { api, authApi };
