import { api } from "./baseApi";
import { ENDPOINTS } from "../../config";

export const getAccounts = (config) =>
  api.get(`/${ENDPOINTS.ACCOUNT}`, config).then((response) => response.data);
