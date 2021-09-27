import { api } from "./baseApi";
import { ENDPOINTS } from "../../config";

export const getPipelines = (config) =>
  api.get(`/${ENDPOINTS.PIPELINE}`, config).then((response) => response.data);
