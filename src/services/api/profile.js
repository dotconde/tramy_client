import { api } from "./baseApi";
import { ENDPOINTS } from "../../config";

export const getProfile = (config) =>
  api.get(`/${ENDPOINTS.PROFILE}`, config).then((response) => response.data);
