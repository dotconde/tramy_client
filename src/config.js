var BASE_URL;

switch (process.env.NODE_ENV) {
  case "production":
    BASE_URL = "https://tramyback.herokuapp.com";
    break;
  default:
    BASE_URL = "http://localhost:3000";
    break;
}

const ENDPOINTS = {
  LOGIN: "login",
  PROFILE: "my_profile",
  ORGANIZATION: "my_organization",
  ACCOUNT: "accounts",
  LEAD: "leads",
  CHAT: "chats",
  CHAT_ASSIGNED_TO_ME: "chats_assigned_to_me",
  CHAT_NOT_ASSIGNED: "chats_not_assigned",
  PIPELINE: "pipelines",
  TEMPLATE: "templates",
  ANALYTICS: "analytics",
};

export { BASE_URL, ENDPOINTS };
