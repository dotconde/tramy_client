import { api } from "./baseApi";
import { ENDPOINTS } from "../../config";

export const updateLead = (leadId, updatedLead, config) =>
  api
    .patch(`/${ENDPOINTS.LEAD}/${leadId}`, updatedLead, config)
    .then((response) => response.data);
