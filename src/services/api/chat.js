import axios from "axios";
import { BASE_URL, ENDPOINTS } from "../../config";

const api = axios.create({ baseURL: BASE_URL });

export const getChats = (config) =>
  api.get(`${ENDPOINTS.CHAT}`, config).then((response) => response.data);

export const getChat = (id, config) => api.get(`/${ENDPOINTS.CHAT}/${id}`);

export const updateChat = (id, updatedChat, config) =>
  api.patch(`/${ENDPOINTS.CHAT}/${id}`, updatedChat, config);
