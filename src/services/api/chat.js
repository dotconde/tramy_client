import { api } from "./baseApi";
import { ENDPOINTS } from "../../config";

export const getChats = (config, query = "") =>
  api
    .get(`${ENDPOINTS.CHAT}${query}`, config)
    .then((response) => response.data);

export const getChat = (id, config) =>
  api.get(`/${ENDPOINTS.CHAT}/${id}`, config).then((response) => response.data);

export const updateChat = (id, updatedChat, config) =>
  api
    .patch(`/${ENDPOINTS.CHAT}/${id}`, updatedChat, config)
    .then((response) => response.data);

export const postMessage = (chatId, data, config) => {
  api
    .patch(`/${ENDPOINTS.CHAT}/${chatId}/new_message`, data, config)
    .then((response) => response.data);
};

export const postMedia = (chatId, data, config) => {
  const headers = {
    ...config.headers,
    "Content-Type": "multipart/form-data",
  };

  return api
    .post(`/${ENDPOINTS.CHAT}/${chatId}/upload_file`, data, {
      headers,
    })
    .then((response) => response.data);
};

export const getTemplates = (config) =>
  api.get(`/${ENDPOINTS.TEMPLATE}`, config).then((response) => response.data);
