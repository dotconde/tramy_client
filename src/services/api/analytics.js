import { api } from "./baseApi";
import { ENDPOINTS } from "../../config";

export const getAnalytics = (config) =>
  api.get(`/${ENDPOINTS.ANALYTICS}`, config).then((response) => response.data);
