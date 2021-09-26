import { api } from "./baseApi";
import { ENDPOINTS } from "../../config";

export const getChats = (config) =>
  api.get(`${ENDPOINTS.CHAT}`, config).then((response) => response.data);

export const getChat = (id, config) =>
  api.get(`/${ENDPOINTS.CHAT}/${id}`, config).then((response) => response.data);

export const updateChat = (id, updatedChat, config) =>
  api
    .patch(`/${ENDPOINTS.CHAT}/${id}`, updatedChat, config)
    .then((response) => response.data);

export const postMessage = (chatId, data, config) => {
  api
    .patch(`/${ENDPOINTS.CHAT}/${chatId}/new_message`, data, config)
    .then((response) => console.log(response));
};
