import { api } from "./baseApi";
import { ENDPOINTS } from "../../config";

export const getPipelines = (config) =>
  api.get(`/${ENDPOINTS.PIPELINE}`, config).then((response) => response.data);

export const getPipelineStageLeads = (id, config) =>
  api
    .get(`/${ENDPOINTS.PIPELINE}/${id}/leads_by_stage`, config)
    .then((response) => response.data);
